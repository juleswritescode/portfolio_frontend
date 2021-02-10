require('dotenv').config();
const {
    MAILGUN_DOMAIN,
    MAILGUN_API_KEY,
    MAILGUN_URL,
    FROM_EMAIL,
    CONTACT_TO_EMAIL,
} = process.env;
const mailgun = require('mailgun-js')({
    apiKey: MAILGUN_API_KEY,
    domain: MAILGUN_DOMAIN,
    url: MAILGUN_URL,
});

const handler = async event => {
    if (event.httpMethod != 'POST') {
        return createResponse(405, 'Method not allowed.', { Allow: 'POST' });
    }

    const { email, name, subject, body } = JSON.parse(event.body);
    if (!email || !name || !subject || !body) {
        return createResponse(422, 'Mail, Name, Subject and Body required.');
    }

    const mailGunData = {
        from: FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        subject,
        'h:Reply-To': email,
        text: `
          ${email}
          ________________________________
          ${body}
        `,
    };

    try {
        await mailgun.messages().send(mailGunData);
        return createResponse(200, 'Success.');
    } catch (error) {
        console.log(error);
        return { statusCode: 500, body: 'Internal server error.' };
    }
};

function createResponse(statusCode, body, headers) {
    return {
        statusCode,
        body,
        headers,
    };
}
module.exports = { handler };
