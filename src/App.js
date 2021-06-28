<<<<<<< HEAD

=======
// import AuthProvider from "./auth/AuthProvider";
>>>>>>> 2eddde0d330a965146001e321e8e626a99f7a012
import AuthProvider from "./controller/auth/AuthProvider";
import AppRouter from "./routers/AppRouter";

function App() {
  return (

<<<<<<< HEAD
      <div>
    <AppRouter />
        {/* <Products/> */}
      <AuthProvider />
      </div>
        
      
   
=======
    <AuthProvider>
      <AppRouter />
    </AuthProvider>

>>>>>>> 2eddde0d330a965146001e321e8e626a99f7a012
  );
}

export default App;