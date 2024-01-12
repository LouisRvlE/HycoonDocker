import { AppShell, ButtonStylesParams, MantineProvider } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { Notifications, notifications } from "@mantine/notifications";
import { lazy, useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Suspense from "./components/Suspense";
import Header from "./layout/Header/Header";
import Navbar from "./layout/Navbar/Navbar";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import GameInfo from "./pages/AdminPanel/GameInfo/GameInfo";
import Modifier from "./pages/AdminPanel/GameInfo/Modifier/Modifier";
import IncomeArea from "./pages/Incomes/IncomeArea";
import IsConnected from "./pages/IsConnected";
import Map from "./pages/Map/Map";
import Quests from "./pages/Quests/Quests";
import Shop from "./pages/Shop/Shop";
import { Provider } from "./scripts/Context";
import { socket } from "./scripts/globalVariables";
import { useAuthStore } from "./scripts/pb/useAuthStore";
import colors, { buttonFilter } from "./scripts/utils/colors";
import { notify } from "./scripts/utils/notify";
const Buildings = lazy(() => import("./pages/Buildings/Buildings"));
const Ressources = lazy(() => import("./pages/Ressources/Ressources"));
const EndPointTester = lazy(() => import("./pages/AdminPanel/EndPointTester"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
    const { auth } = useAuthStore();
    useEffect(() => {
        socket.on("connect", () => {
            if (!auth.model?.id) return;
            const id = randomId();
            notifications.show({
                message: "Connection...",

                autoClose: 10000,
                loading: true,
                color: "orange",
                id,
            });
            socket.emit("updateID", { id: auth.model?.id, notifyId: id });
        });
        return () => {
            socket.off("connect");
        };
    }, [auth.model]);

    notify();

    return (
        <BrowserRouter>
            <Provider>
                <MantineProvider
                    theme={{
                        colorScheme: "dark",
                        fontFamily: "'Pixellari'",
                        colors: colors,
                        primaryShade: 3,
                        // primaryColor: "rotBlue",
                        components: {
                            Button: {
                                variants: {
                                    pixel: () => ({
                                        root: {
                                            backgroundColor: "#267ae9",
                                            borderImage:
                                                "url(https://louisrvl.fr/pocketbase/api/files/nl82r3vv7m2h6mp/whlnb8zi9307r8x/sans_titre_lbJ7twUcGZ.png) 125 / 15px / 5px round",
                                            boxSizing: "content-box",
                                            color: "white",
                                            borderRadius: 0,
                                        },
                                    }),
                                },
                                styles: (
                                    _theme,
                                    params: ButtonStylesParams,
                                    { variant }
                                ) => {
                                    if (variant === "pixel")
                                        return {
                                            root: {
                                                filter: buttonFilter[
                                                    params.color || "rotBlue"
                                                ],
                                            },
                                        };
                                    return { root: {} };
                                },
                            },
                            ActionIcon: {
                                variants: {
                                    pixel: (_theme) => ({
                                        root: {
                                            backgroundColor: "#267ae9",
                                            borderImage:
                                                "url(https://louisrvl.fr/pocketbase/api/files/nl82r3vv7m2h6mp/whlnb8zi9307r8x/sans_titre_lbJ7twUcGZ.png) 125 / 15px / 5px round",
                                            boxSizing: "content-box",
                                            color: "white",
                                            borderRadius: 0,
                                        },
                                    }),
                                },
                                styles: (
                                    _theme,
                                    params: ButtonStylesParams,
                                    { variant }
                                ) => {
                                    if (variant === "pixel")
                                        return {
                                            root: {
                                                filter: `${
                                                    buttonFilter[
                                                        params.color ||
                                                            "rotBlue"
                                                    ]
                                                }`,
                                            },
                                        };
                                    return { root: {} };
                                },
                            },
                        },
                    }}
                >
                    <ModalsProvider>
                        <AppShell
                            padding="md"
                            navbar={<Navbar />}
                            header={<Header />}
                            styles={(_theme) => ({
                                main: {
                                    backgroundColor: "#25262bBF",
                                    color: "white",
                                    fontFamily: "'Pixellari'",
                                },
                            })}
                        >
                            <Notifications
                                limit={3}
                                position="top-right"
                                mt={58}
                            />

                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <Suspense>
                                            <HomePage />
                                        </Suspense>
                                    }
                                />
                                <Route path="/Game" element={<IsConnected />}>
                                    <Route
                                        path="/Game/Buildings"
                                        element={
                                            <Suspense>
                                                <Buildings />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/Game/Shop"
                                        element={
                                            <Suspense>
                                                <Shop />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/Game/Ressources"
                                        element={
                                            <Suspense>
                                                <Ressources />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/Game/Incomes"
                                        element={
                                            <Suspense>
                                                <IncomeArea />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/Game/Quests"
                                        element={
                                            <Suspense>
                                                <Quests />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/Game/Map"
                                        element={
                                            <Suspense>
                                                <Map />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/Game/AdminPanel"
                                        element={<Outlet />}
                                    >
                                        <Route
                                            path="/Game/AdminPanel"
                                            element={
                                                <Suspense>
                                                    <AdminPanel />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/Game/AdminPanel/EndpointTester"
                                            element={
                                                <Suspense>
                                                    <EndPointTester />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/Game/AdminPanel/GameInfo/Modifier/:defaultvalue"
                                            element={
                                                <Suspense>
                                                    <Modifier />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/Game/AdminPanel/GameInfo/Modifier"
                                            element={
                                                <Suspense>
                                                    <Modifier />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/Game/AdminPanel/GameInfo"
                                            element={
                                                <Suspense>
                                                    <GameInfo />
                                                </Suspense>
                                            }
                                        />
                                    </Route>
                                </Route>
                            </Routes>
                        </AppShell>
                    </ModalsProvider>
                </MantineProvider>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
