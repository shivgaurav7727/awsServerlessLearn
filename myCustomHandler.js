"use strict";

module.exports.myFunction = async (event) => {
  let body = JSON.parse(event.body);

  const { username, email } = body;

  if (username && email) {
    console.log(`hello ${username} and your email is ${email}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `hello ${username} and your email is ${email}`,
      }),
    };
  }
  return {
    statusCode: 400,
    body: JSON.stringify({
      message: "Please enter correct username and email !!!",
    }),
  };
};
return {
  statusCode: 400,
  body: JSON.stringify(
    {
      message: "please enter username and email ",
    },
    null,
    2
  ),
};
