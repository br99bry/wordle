const Layout = ({ children }) => (
  <div className="relative flex justify-center px-3 py-20 w-screen h-screen">
    <div className="w-default-app flex justify-center items-center flex-col	">
      {children}
    </div>
  </div>
)

export default Layout