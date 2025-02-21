export const thanksEmailTemplate = (
  firstName,
  lastName,
  companyName,
  positon
) => {
  return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Thanks For Apply</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <div class="message">Your application send to ${companyName}</div>
            <div class="body">
                <p>Dear ${firstName} ${lastName},</p>
                <p>Thank you for your interest in <span class="highlight">"${companyName}"</span>. and for taking the time to apply for the ${positon}.</p>
                <p>We just wanted to let you know that we received your application and that we're looking forward to reviewing it.
                </p>
            </div>
            <div class="support">Have a great day!</div>
        </div>
    </body>
    
    </html>`;
};
