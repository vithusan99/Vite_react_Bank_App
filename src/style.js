const style={
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2:"font-poppins font-semibold xs:text-[48px] text-[30px] text-white xs:leading-[76.8px] leading-[36.8px] w-full",
    para:"font-poppins font-normal text-dimWhite text-[14px] leading-[30.8px]",

    flexCenter:"flex justify-center items-center",
    flexStart:"flex justify-center items-start",

    paddingX:"sm:px-16 px-6",
    paddingY:"sm:py-12 py-4",
    padding:"sm:px-16 px-6 sm:py-12 py-4",

    marginX:"sm:mx-16 mx-6",
    marginX:"sm:my-16 my-6"
}

export const layout={
    section: `flex md:flex-row flex-col ${style.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${style.paddingY}`,

    sectionImageReverse: `flex-1 flex ${style.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg:`flex-1 flex ${style.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${style.flexStart} flex-col`
}

export default style;