import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER, // Your email
        to: process.env.GMAIL_USER, // Send to your email
        subject: `New message from ${name}`,
        text: `
          You have received a new message from ${name} (${email}):
          ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error }), { status: 500 });
    }
}
