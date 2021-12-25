import QuadrantCircleVector from '../../../../public/system/vectors/quadrantPrimary.svg'
import Image from 'next/image'
export type SnippetCardProps ={
    title:string,
    slug: string,
    type?: 'landscape'| 'potrait'
}

const viewportClasses=`iphones:text-fs18 iphonex:text-fs30 
ipadpro:text-fs24 ipad:text-fs24
desktop:text-fs24`

const LandscapeCard = ({title,slug }:SnippetCardProps) =>{
    return <>

    <div className={`${viewportClasses} w-96 h-44  relative`}>
    <div className="absolute -bottom-3 right-0">
                <Image src={QuadrantCircleVector} height="176" width="176" />
            </div>
            <p className="p-4">

    {title?title:<>"lorem ipsum"</>}
            </p>
        
    <p className='m-4 mt-8 text-center text-secondary rounded-md bg-accent w-1/3 text-fs18 p-1'>
        View More
    </p>
    </div>
    </>
}

const SnippetDisplayCard = ({title,slug,type}:SnippetCardProps) =>{
   switch(type){
       case 'landscape':
           return<><LandscapeCard title={title} slug={slug}/></> 
       case 'potrait':
           return <></>
       default:
           return <></> 
    }
   
}
export default SnippetDisplayCard