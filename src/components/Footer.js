import SimpleReactFooter from "simple-react-footer";
import React from "react";
import "./Footer.css";

const Footer = () => {
    const description = "Dragons were ancient, intelligent, powerful creatures, as feared as they were admired in Middle-earth. Their exact origin is debated, though it was clearly stated that they were created by Morgoth in some sense, millennia before the events of The Hobbit and The Lord of the Rings.";
    const title = "Dragons";
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "Home",
                    link: "/home"

                },
                {
                    name: "Items",
                    link: "/items"
                },
                {
                    name: "About",
                    link: "/about"
                },
                {
                    name: "Account",
                    link: "/account"
                }
            ]
        },
    ];
    return (
        <div className="temp">
            <SimpleReactFooter
                description={description}
                title={title}
                columns={columns}
                iconColor="white"
                backgroundColor="black"
                fontColor="white"
                copyright="228867"
            />
        </div>

    );
}

export default Footer