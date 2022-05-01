/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
  ENV
  REGION
  STORAGE_FORMTABLE_ARN
  STORAGE_FORMTABLE_NAME
  STORAGE_FORMTABLE_STREAMARN
Amplify Params - DO NOT EDIT */

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

function id() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

app.post('/number', function (req, res) {

  console.log(req);
  /*
    var params = {
      TableName: 'User-unobytrwmjcdtber2vvbri4m5y-staging',
      Key: {
        'id': req.body.email,
      },
      UpdateExpression: 'set contact = :r',
      ExpressionAttributeValues: {
        ':r': req.body.contact,
      },
    }
  
   docClient.update(params, function (err, data) {
      if (err) res.json({ err })
      else res.json({ success: 'Updated successfully!' })
    })
  */


  // Load the AWS SDK for Node.js
  var AWS = require('aws-sdk');
  // Set the region 
  AWS.config.update({ region: 'us-east-1' });

  // Create the DynamoDB service object
  var ddb = new AWS.DynamoDB();

  var params = {
    TableName: 'contactDetails',
    Key: {
      'useremail': { S: req.body.email }
    },
    ProjectionExpression: 'subscription'
  };




  var test = ddb.getItem(params, function (err, data) {

    if (err) {
      res.json({ err })
    } else {
      //res.json({ success: data.Item.subscription.S });
      var sarn = data.Item.subscription.S;

      var AWS = require('aws-sdk');
      AWS.config.update({
        region: 'us-east-1'
      });

      let sns = new AWS.SNS();
      let params2 = {
        SubscriptionArn: sarn
      };
      sns.unsubscribe(params2, (err, data) => {
        if (err) {
          res.json({ err })
        } else {
          AWS.config.update({
            region: 'us-east-1'
          });

          let sns2 = new AWS.SNS();
          let params3 = {
            Protocol: 'SMS',
            TopicArn: 'arn:aws:sns:us-east-1:138581057382:MedaarNotification',
            Endpoint: req.body.contact
          };
          sns2.subscribe(params3, (err, data) => {
            if (err) {
              res.json({ err })
            } else {
              var sub = data.SubscriptionArn;

              var params4 = {
                TableName: 'contactDetails',
                Key: {
                  'useremail': req.body.email,
                },
                UpdateExpression: 'set subscription = :r',
                ExpressionAttributeValues: {
                  ':r': sub,
                },
              }

              docClient.update(params4, function (err, data) {
                if (err) res.json({ err })
                else res.json({ success: 'Updated successfully!' })
              })
            }
          });
        }
      });
    }
  });
});


app.listen(3000, function () {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
