# REST API Design Guidelines

## Intro

To provide the smoothest possible experience for developers, it's important to have these APIs follow consistent design guidelines, thus making using them easy and intuitive. This document establishes the guidelines to be followed by TLab REST API developers for developing such APIs consistently.

The benefits of consistency accrue in aggregate as well; consistency allows teams to leverage common code, patterns, documentation and design decisions.

These guidelines aim to achieve the following:

* Define consistent practices and patterns for all API endpoints across Projects.
* Make accessing TLab Services via REST interfaces easy for all application developers.
* Allow service developers to leverage the prior work of other services to implement, test and document REST endpoints defined consistently.
* Allow for partners (e.g., non-TLab entities) to use these guidelines for their own REST endpoint design.

## 1. URL structure

Humans SHOULD be able to easily read and construct URLs.

This facilitates discovery and eases adoption on platforms without a well-supported client library.

An example of a well-structured URL is:

`https://{host}/{version}/{service-name}/{api-function}`

`https://api.zoo.com/v1/animal-service/cats`

An example URL that is not friendly is:

`https://api.contoso.com/EWS/OData/Users('jdoe@mail.com')/Folders('AAMkADdiYzI1MjUzLTk4MjQtNDQ1Yy05YjJkLWNlMzMzYmIzNTY0MwAuAAAAAACzMsPHYH6HQoSwfdpDx-2bAQCXhUk6PC1dS7AERFluCgBfAAABo58UAAA=')`

## 2. Resource Names

The base URL is the most important design affordance of your API. A simple and intuitive base URL design makes using your API easy.

Affordance is a design property that communicates how something should be used without requiring documentation. For e.g, A door handle's design should communicate whether you pull or push.

Always keep in mind these following points while designing the URL for your resources.

* There should be only 2 base URLs per resource. One to fetch the collection; the second one for a specific element in the collection.
* Verbs should be kept away from URLs, instead use nouns.
* Avoid mixing plurals and singulars for your resource names. Stick to one and keep it consistent for all your APIs
* Use concrete names for your resource rather than abstract ones. For e.g, if you are designing an API for blogs and articles, consider exposing `/blogs`, `/articles` rather than `/items` or `/assets`.

Example:

* `GET` **Fetch all cats**

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
* `GET` **Fetch a particular cat**

    endpoint: `/cats/:id`
    
    API to fetch a particular cat by `id`
    
    **PATH VARIABLES**
    
    | name | description |
    |------|-------------|
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
|---------|----------------------------------------------------------------------------------------------------------------------------|
| GET     | Return the current value of an object                                                                                      |
| PUT     | Replace an object, or create a named object, when applicable                                                               |
| DELETE  | Delete an object                                                                                                           |
| POST    | Create a new object based on the data provided, or submit a command                                                        |
| HEAD    | Return metadata of an object for a GET response. Resources that support the GET method MAY support the HEAD method as well |
| PATCH   | Apply a partial update to an object                                                                                        |
| OPTIONS | Get information about a request; see below for details.                                                                    |

Example:

* `POST` **Add new cat**

    Endpoint: `/cats`
    
    API to add a new cat.
    
    Example request:
    
    ```bash
    curl --location -g '{{url}}/v1/animal-service/cats' \
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
  
* `PUT` **Update cat details**

    Endpoint: `/cats/:id`
    
    Update details of a cat, identified by `id`
    
    Example request:
    
    ```bash
    curl --location -g --request PUT '{{url}}/v1/animal-service/cats/1' \
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

* `DELETE` **Delete cat details**

    Endpoint: `/cats/:id`
    
    Delete details of a cat, identified by `id`
    
    Example request:
    
    ```bash
    curl --location -g --request DELETE '{{url}}/v1/animal-service/cats/1'
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

* `GET` **Search cats with name**

    Endpoint: `/cats?q={query}`
    
    API to search cats with name
    
    **PARAMS**
    
    | Name | Description                                                            |
    |------|------------------------------------------------------------------------|
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
Here, the breed is a query parameter that implements a filter