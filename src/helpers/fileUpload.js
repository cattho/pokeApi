export const fileUpload= async (archivo) =>{
    const cloudUrl='https://api.cloudinary.com/v1_1/dfp8qduho/upload'

    const formData= new FormData()
    formData.append('upload_preset','pokemon')
    formData.append('file', archivo)

    try{
        const res = await fetch(cloudUrl,{
            method:'POST',
            body:formData
        })
        if(res.ok){
            const cloudRes= await res.json()
            return cloudRes.secure_url
        }else{
            throw await res.json()
        }
    }
    catch(error){
    }
}