import SimpleReactFooter from "simple-react-footer";
import React from "react";
import "./Footer.css";

const Footer = () => {
    const description = "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
    const title = "Cats";
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
        <div className="content-container">
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