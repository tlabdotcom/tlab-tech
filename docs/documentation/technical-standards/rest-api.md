# REST API Design Guidelines

::: info 📖 Intro
To provide the smoothest possible experience for developers, it's important to have these APIs follow consistent design guidelines, thus making using them easy and intuitive. This document establishes the guidelines to be followed by TLab REST API developers for developing such APIs consistently.

The benefits of consistency accrue in aggregate as well; consistency allows teams to leverage common code, patterns, documentation and design decisions.

These guidelines aim to achieve the following:

- Define consistent practices and patterns for all API endpoints across Projects.
- Make accessing TLab Services via REST interfaces easy for all application developers.
- Allow service developers to leverage the prior work of other services to implement, test and document REST endpoints defined consistently.
- Allow for partners (e.g., non-TLab entities) to use these guidelines for their own REST endpoint design.
  :::

## 1. URL structure

Humans SHOULD be able to easily read and construct URLs.

This facilitates discovery and eases adoption on platforms without a well-supported client library.

An example of a well-structured URL is:

`https://{host}/{collection}/{operation}`

`https://api.zoo.com/cats/create`

An example URL that is not friendly is:

`https://api.contoso.com/EWS/OData/Users('jdoe@mail.com')/Folders('AAMkADdiYzI1MjUzLTk4MjQtNDQ1Yy05YjJkLWNlMzMzYmIzNTY0MwAuAAAAAACzMsPHYH6HQoSwfdpDx-2bAQCXhUk6PC1dS7AERFluCgBfAAABo58UAAA=')`

## 2. Resource Names

The base URL is the most important design affordance of your API. A simple and intuitive base URL design makes using your API easy.

Affordance is a design property that communicates how something should be used without requiring documentation. For e.g, A door handle's design should communicate whether you pull or push.

Always keep in mind these following points while designing the URL for your resources.

- There should be only 2 base URLs per resource. One to fetch the collection; the second one for a specific element in the collection.
- Verbs should be kept away from URLs, instead use nouns.
- Avoid mixing plurals and singulars for your resource names. Stick to one and keep it consistent for all your APIs
- Use concrete names for your resource rather than abstract ones. For e.g, if you are designing an API for blogs and articles, consider exposing `/blogs`, `/articles` rather than `/items` or `/assets`.

Example:

- `GET` **Fetch all cats**

  endpoint: `/cats`

  API to fetch all cats

  Example request:

  ```bash
  curl --location -g '{{url}}/v1/animal-service/cats'
  ```

  Example Response:

  ```json
  {
    "code": 200,
    "message": "success",
    "data": [
      {
        "id": 1,
        "name": "Taco",
        "breed": "Abyssinian",
        "owner": {
          "id": 1,
          "name": "John Doe"
        }
      },
      {
        "id": 2,
        "name": "Snowball",
        "breed": "Birman",
        "owner": {
          "id": 12,
          "name": "Stuart Little"
        }
      }
    ]
  }
  ```

- `GET` **Fetch a particular cat**

  endpoint: `/cats/:id`

  API to fetch a particular cat by `id`

  **PATH VARIABLES**

  | name | description |
  | ---- | ----------- |
  | id   | Cat ID      |

  Example request:

  ```bash
      curl --location -g '{{url}}/v1/animal-service/cats/1'
  ```

  Example response:

  ```json
  {
    "code": 200,
    "message": "success",
    "data": {
      "id": 2,
      "name": "Snowball",
      "breed": "Birman",
      "owner": {
        "id": 12,
        "name": "Stuart Little"
      }
    }
  }
  ```

## 3. HTTP Method

Operations MUST use the proper HTTP methods whenever possible, and operation idempotency MUST be respected. HTTP methods are frequently referred to as the HTTP verbs. The terms are synonymous in this context, however, the HTTP specification uses the term method.

Below is a list of methods that REST services should support. Not all resources will support all methods, but all resources using the methods below MUST conform to their usage.

| Method  | Description                                                                                                                |
| ------- | -------------------------------------------------------------------------------------------------------------------------- |
| GET     | Return the current value of an object                                                                                      |
| PUT     | Replace an object, or create a named object, when applicable                                                               |
| DELETE  | Delete an object                                                                                                           |
| POST    | Create a new object based on the data provided, or submit a command                                                        |
| HEAD    | Return metadata of an object for a GET response. Resources that support the GET method MAY support the HEAD method as well |
| PATCH   | Apply a partial update to an object                                                                                        |
| OPTIONS | Get information about a request; see below for details.                                                                    |

Example:

- `POST` **Add new cat**

  Endpoint: `/cats/create`

  API to add a new cat.

  Example request:

  ```bash
  curl --location -g '{{url}}/v1/animal-service/cats/create' \
  --header 'Content-Type: application/json' \
  --data '{
      "name": "Taco",
      "breed": "Abyssinian",
      "owner": 1
  }'
  ```

  Example response:

  ```json
  {
    "code": 201,
    "message": "created",
    "data": {
      "name": "Taco",
      "breed": "Abyssinian",
      "owner": 1
    }
  }
  ```

- `PUT` **Update cat details**

  Endpoint: `/cats/update/:id`

  Update details of a cat, identified by `id`

  Example request:

  ```bash
  curl --location -g --request PUT '{{url}}/v1/animal-service/cats/update/1' \
  --header 'Content-Type: application/json' \
  --data '{
      "name": "Fury",
      "breed": "Abyssinian",
      "owner": 1
  }'
  ```

  Example response:

  ```json
  {
    "code": 200,
    "message": "success",
    "data": {
      "name": "Fury",
      "breed": "Abyssinian",
      "owner": 1
    }
  }
  ```

- `DELETE` **Delete cat details**

  Endpoint: `/cats/delete/:id`

  Delete details of a cat, identified by `id`

  Example request:

  ```bash
  curl --location -g --request DELETE '{{url}}/v1/animal-service/cats/delete/1'
  ```

  Example response:

  ```json
  {
    "code": 204,
    "message": "no content",
    "data": null
  }
  ```

## 4. Query Parameters

It's best to keep the base resource URLs as lean as possible. Complex result filters, sorting requirements and advanced searching (when restricted to a single type of resource) can all be easily implemented as query parameters on top of the base URL.

In some cases, you can also use query params to populate or filter out information from a response. Also whatever query parameters you decide to use, keep it consistent across your endpoints.

### 4.1 Searching

When full text search is used as a mechanism of retrieving resource instances for a specific type of resource, it can be exposed on the API as a query parameter on the resource's endpoint. Let's say q. Search queries should be passed straight to the search engine and API output should be in the same format as a normal list result.

Example:

- `GET` **Search cats with name**

  Endpoint: `/cats?q={query}`

  API to search cats with name

  **PARAMS**

  | Name | Description                                                            |
  | ---- | ---------------------------------------------------------------------- |
  | q    | {{query}}<br/>Queries all cats whose name contains tha given parameter |

  Example request:

  ```bash
  curl --location -g '{{url}}/v1/animal-service/cats?q=snow'
  ```

  Example response:

  ```json
  {
    "code": 200,
    "message": "success",
    "data": [
      {
        "id": 1,
        "name": "Snowy",
        "breed": "Abyssinian",
        "owner": {
          "id": 1,
          "name": "John Doe"
        }
      },
      {
        "id": 2,
        "name": "Snowball",
        "breed": "Birman",
        "owner": {
          "id": 12,
          "name": "Stuart Little"
        }
      }
    ]
  }
  ```

### 4.2 Filtering

Use a unique query parameter for each field that implements filtering.
For example, when requesting a list of tickets from the /cats endpoint, you may want to limit these to only those with color white. This could be accomplished with a request like GET /cats?breed=birman.
Here, the breed is a query parameter that implements a filter.

Example:

- `GET` **Filter cats by name**

  Endpoint: `{{url}}/cats?breed={{breedName}}`

  Params:

| name  | value   | description                                 |
| ----- | ------- | ------------------------------------------- |
| breed | persian | string                                      |
| owner | 1,2     | use seperated by coma if use multiple value |

Example Request:

```bash
curl --location -g '{{url}}/cats?breed=birman'
```

Example Response:

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": 1,
      "name": "Sully",
      "breed": "Birman",
      "owner": {
        "id": 1,
        "name": "John Doe"
      }
    },
    {
      "id": 2,
      "name": "Snowball",
      "breed": "Birman",
      "owner": {
        "id": 12,
        "name": "Stuart Little"
      }
    }
  ]
}
```

### 4.3 Sorting

A generic parameter `sort_by` can be used to describe sorting by fields.
Accommodate complex sorting requirements by letting the sort parameter take in a list of comma separated fields.
A generic parameter `sort` can be used to describe sorting direction `ASC` or `DESC`.

Example:

- `GET` **Fetch cats, sorted by name (ascending or descending)**

  Endpoint: `{{url}}/cats?sort_by=name&sort=asc`

  Params:

| name    | value      | description                          |
| ------- | ---------- | ------------------------------------ |
| sort_by | name,id    | seperated by comma if multiple value |
| sort    | asc / desc | sorting direction                    |

Example Request:

```bash
curl --location -g '{{url}}/cats?sort_by=name&sort=asc'
```

Example Response:

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": 5,
      "name": "Amy",
      "breed": "Birman",
      "owner": {
        "id": 12,
        "name": "Stuart Little"
      }
    },
    {
      "id": 2,
      "name": "Snowball",
      "breed": "Birman",
      "owner": {
        "id": 12,
        "name": "Stuart Little"
      }
    },
    {
      "id": 1,
      "name": "Taco",
      "breed": "Abyssinian",
      "owner": {
        "id": 1,
        "name": "John Doe"
      }
    }
  ]
}
```

### 4.4 Pagination

It is almost never a good idea to return all resources of your database at once.
Consequently, you should provide a pagination mechanism.
A really simple approach is to use the parameters offset and limit, which are well-known from databases.

Example:

- `GET` Fetch cats

  `{{url}}/cats?page=1&limit=10`

  API to fetch cats using paginated API. If the client omits the parameter you should use defaults (like offset=0 and limit=10)

  Params:

| name  | value                                               |
| ----- | --------------------------------------------------- |
| page  | 1<br/> List offset                                  |
| limit | 10<br/>Max number of items that respnse should have |

Example Request:

```bash
curl --location -g '{{url}}/cats?page=1&limit=3'
```

Example Response:

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "page": 1,
    "limit": 10,
    "total_items": 42,
    "total_page": 5,
    "items": [
      {
        "id": 1,
        "name": "Taco",
        "breed": "Abyssinian",
        "owner": {
          "id": 1,
          "name": "John Doe"
        }
      },
      {
        "id": 2,
        "name": "Snowball",
        "breed": "Birman",
        "owner": {
          "id": 12,
          "name": "Stuart Little"
        }
      },
      {
        "id": 3,
        "name": "Fury",
        "breed": "Birman",
        "owner": {
          "id": 12,
          "name": "Stuart Little"
        }
      }
    ]
  }
}
```

## 5. Status Code

When the client raises a request to the server through an API,
the client should know the feedback, whether it failed, passed or the request was wrong.
HTTP status codes are a bunch of standardized codes which has various explanations in various scenarios.
The server should always return the right status code.

- **200 OK** - Response to a successful GET, PUT, PATCH or DELETE. Can also be used for a POST that doesn't result in a creation.
- **201 Created** - Response to a POST that results in a creation. Should be combined with a Location header pointing to the location of the new resource
- **204 No Content** - Response to a successful request that won't be returning a body (like a DELETE request)
- **304 Not Modified** - Used when HTTP caching headers are in play
- **400 Bad Request** - The request is malformed, such as if the body does not parse
- **401 Unauthorized** - When no or invalid authentication details are provided. Also useful to trigger an auth popup if the API is used from a browser
- **403 Forbidden** - When authentication succeeded but authenticated user doesn't have access to the resource
- **404 Not Found** - When a non-existent resource is requested
- **405 Method Not Allowed** - When an HTTP method is being requested that isn't allowed for the authenticated user
- **410 Gone** - Indicates that the resource at this end point is no longer available. Useful as a blanket response for old API versions
- **415 Unsupported Media Type** - If incorrect content type was provided as part of the request
- **422 Unprocessable Entity** - Used for validation errors
- **429 Too Many Requests** - When a request is rejected due to rate limiting
- **500 Internal Server Error** - This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server
- **503 Service Unavailable** - The server is unable to handle the request for a service due to temporary maintenance

## 6. Errors

Just like an HTML error page shows a useful error message to a visitor, an API should provide a useful error message in a known consumable format.
The representation of an error should be no different than the representation of any resource, just with its own set of fields.

The API should always return sensible HTTP status codes.
API errors typically break down into 2 types: 400 series status codes for client issues & 500 series status codes for server issues.
At a minimum, the API should standardize that all 400 series errors come with consumable JSON error representation.
If possible (i.e. if load balancers & reverse proxies can create custom error bodies), this should extend to 500 series status codes.

A JSON error body should provide a few things for the developer - a useful error message, a unique error code (that can be looked up for more details in the docs) and possibly a detailed description.
JSON output representation for something like this would look like:

```json
{
  "code": 409,
  "message": "Data already exists"
}
```

Validation errors for PUT, PATCH and POST requests will need a field breakdown.
This is best modeled by using a fixed top-level error code for validation failures and providing the detailed errors in an additional errors field, like so:

```json
{
  "code": 422,
  "message": "Validation Failed",
  "errors": [
    {
      "field": "first_name",
      "message": "First name cannot have fancy characters"
    },
    {
      "field": "password",
      "message": "Password cannot be blank"
    }
  ]
}
```
