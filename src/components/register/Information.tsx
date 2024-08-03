interface Props {
    name: string
}

export const InfoScreen3 = (props: Props) => {
  return (
   <>
    <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white p-2 transition-all duration-1000">{props.name}</h4>
   </>
  )
}