import Head from "next/head";

const Form = () => {
    const registerCustomer = async (event) => {
        event.preventDefault();

        const req = await fetch("http://localhost:8080/customers", {
            body: JSON.stringify({
                name: event.target.name.value,
                email: event.target.email.value,
                active: false
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })

        const res = await req.json()
        console.log(res)
    }

    return (
        <div>
            <Head>
                <meta charSet="UTF-8"/>

                <meta property="og:title" content="articles"/>
                <meta property="og:description" content="desc"/>
                <meta property="og:keywords" content="key, words"/>

                <meta name="title" content="articles"/>
                <meta name="description" content="desc"/>
                <meta name="keywords" content="key, words"/>

                <title>Form</title>

                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <form onSubmit={registerCustomer}>
                <input name="name" type="text" placeholder="Name"/>
                <input name="email" type="email" placeholder="Email"/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Form;
