# Delivery Service

## Description

A private delivery service company handles the collection and delivery of parcels for people.

## Main Frameworks and Packages

- **Nestjs** a framework for building server-side applications.
- **Expressjs** used as the underlying HTTP Server for nestjs.
- **Socket.io** used as the underlying web-socket platform for nestjs.
- **class-validator** for validating incoming datatypes through http requests.
- **class-transformer** for safely transforming incoming data into the proper data types the application expects.

## Running the app

```bash
# install dependencies
$ npm install

# run the app in dev watch mode
# the app listen on port 8000
$ npm run start:dev
```

## Fulfilled Requirements

- [x] A sender should be able to create a parcel to be delivered by specifying pick-up and drop-off address (should be just a text field, no need for address validation).
- [x] A sender should be able to see the status of his parcels.
- [x] A biker should be able to see a list of the parcels
- [x] A biker should be able to pick up a parcel.
- [x] Once a parcel is picked up by a biker, it cannot be picked up by other bikers.
- [x] A biker should be able to input the timestamp of the pickup and the delivery for each order.
- [x] The status of the order should be updated for the sender.

# Extra Features added

- [x] **Web-Socket** connections to update senders and bikers with parcels status in realtime.
- [x] **JWT Authentication** for senders and bikers.
- [x] **Role Based Authorization** to control what senders and bikers can and can not do.
- [x] **Data Validation and Sanitaion** to prevent any misuse to the app services.
- [x] **Data Transforming** to ensure valid, and safe data types are provided to our application.
