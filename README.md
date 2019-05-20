# Plumbline

Plumbline is a utility container that allows the use of neo4j-graphql-js with a Neo4j instance.

## Build the container

1. Adjust the registry setting at the top of the `Makefile`.
2. `make` will build and push your docker image

## Running on GCP Cloud Run

1. Adjust parameters in the Makefile
2. Make sure to define
the `NEO4J_URI`, `NEO4J_USERNAME`, `NEO4J_PASSWORD` of your instance.
3. Define an env var `TYPEDEFS` with the typedefs you'd like to use with the Neo4j instance.
2. `make cloudrun` will deploy the plumbline service given those specifics.

