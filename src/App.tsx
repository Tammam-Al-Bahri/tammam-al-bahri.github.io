import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import pages from "./pages";
import Footer from "./components/Footer";

function Layout() {
    return (
        <SidebarProvider>
            <div>
                <div className="flex fixed z-50">
                    <AppSidebar />
                    <div className="pt-2 pl-1 lg:pl-2">
                        <SidebarTrigger className="lg:scale-150" />
                    </div>
                </div>
                <main>
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </SidebarProvider>
    );
}

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    {pages.map(({ path, component: Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
