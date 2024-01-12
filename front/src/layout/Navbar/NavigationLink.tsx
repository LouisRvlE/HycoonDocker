import { Button } from "@mantine/core";
import { NavLink } from "react-router-dom";

const NavigationLink = ({
    to,
    children,
    newPage,
    color = "blue",
}: {
    to: string;
    children: string;
    newPage?: boolean;
    color?: string;
}) => {
    return (
        <Button
            sx={{ flex: 1 }}
            color={color}
            variant="pixel"
            target={newPage ? "_blank" : undefined}
            component={NavLink}
            to={to}
            size="md"
        >
            {children}
        </Button>
    );
};

export default NavigationLink;
