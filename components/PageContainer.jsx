export default function PageContainer({ children }) {
    return (
        <div
        className="w-full py-16 lg:py-32
      lg:w-3/4 lg:mx-auto
      xl:w-3/5
      "
      >
        {children}
      </div>
    )
}