import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, phone, email, message } = await req.json();

        if (!name || !phone || !email || !message) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "natethorffin@gmail.com",
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: "natethorffin@gmail.com",
            replyTo: email,
            to: "natethorffin@gmail.com",
            subject: `Integraserve Website Enquiry from ${name}`,
            text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return Response.json({ success: true });
    } catch {
        return Response.json({ error: "Failed to send message" }, { status: 500 });
    }
}