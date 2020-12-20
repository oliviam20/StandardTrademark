import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [data, setData] = useState({
    feedback: "",
    name: "testingTEDDY",
    email: "teddy@example.com",
  });
  const [feedback, setFeedback] = useState("");

  const [testValue, setTestValue] = useState("");

  const handleSubmit = (event) => {
    const templateId = "template_gskw7pv";

    sendFeedback(templateId, {
      message: feedback,
      from_name: data.name,
      reply_to: data.email,
      testValue: testValue,
    });
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send(
        "service_vw8nn8g",
        templateId,
        variables,
        "user_J1738JYdqY8Ysg65novPf"
      )
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const onTestChange = (event) => {
    setTestValue(event.target.value);
  };

  return (
    <form className="test-mailing">
      <h1>Let's see if it works</h1>
      <div>
        <input id="test" onChange={onTestChange} value={testValue} />
        <textarea
          id="test-mailing"
          name="test-mailing"
          onChange={handleChange}
          placeholder="Post some lorem ipsum here"
          required
          value={feedback}
          style={{ width: "100%", height: "150px" }}
        />
      </div>
      <input
        type="button"
        value="Submit"
        className="btn btn--submit"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default Form;
