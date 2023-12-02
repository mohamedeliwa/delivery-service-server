# Delivery Service

## Description

A private delivery service company handles the collection and delivery of parcels for people built using **Nestjs** and **Typescript**.

## Main Frameworks and Packages used

- **Nestjs** a framework for building server-side applications.
- **Expressjs** used as the underlying HTTP Server for nestjs.
- **Socket.io** used as the underlying web-socket platform for nestjs.
- **class-validator** for validating incoming data types through http requests.
- **class-transformer** for safely transforming incoming data into the proper data types the application expects.

## Running the app

```bash
# install dependencies
$ npm install

# run the app in dev watch mode
# the app listen on port 8000
$ npm run start:dev
```

## Authentication

- All hardcoded accounts uses the same password which is `password`.
- All senders accounts' names starts with `sender_*`.
  > - refers to the number of the sender, we have 5 sender.
  > - an example of sender account `name: sender_1` and `password: password`.
- All bikers accounts' names starts with `biker_*`,
  > - refers to the number of the biker, we have 10 bikers.
- A list of the hardcoded accounts will be found in `src\users\schemas\user.db.ts`

## Fulfilled Requirements

- [x] A sender should be able to create a parcel to be delivered by specifying pick-up and drop-off address (should be just a text field, no need for address validation).
- [x] A sender should be able to see the status of his parcels.
- [x] A biker should be able to see a list of the parcels
- [x] A biker should be able to pick up a parcel.
- [x] Once a parcel is picked up by a biker, it cannot be picked up by other bikers.
- [x] A biker should be able to input the timestamp of the pickup and the delivery for each order.
- [x] The status of the order should be updated for the sender.

## Extra Features added

- [x] **Web-Socket** connections to update senders and bikers with parcels status in realtime.
- [x] **JWT Authentication** for senders and bikers.
- [x] **Role Based Authorization** to control what senders and bikers can and can not do.
- [x] **Data Validation and Sanitaion** to prevent any misuse to the app services.
- [x] **Data Transforming** to ensure valid, and safe data types are provided to our application.

## Postman Collection

added to describe the APIs of the service. <br />
you will find it in the root project directory. <br />
`delivery_service.postman_collection.json`
