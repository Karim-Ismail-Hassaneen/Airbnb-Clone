export const getExploreData = async () => {
 try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`)
    const exploreData = await res.json()
    return exploreData
 } catch(err) {
    console.log(err)
 }
};

export const getLiveData = async () => {
 try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`)
    const liveData = await res.json()
    return liveData
 } catch(err) {
    console.log(err)
 }
};

export const getSearchResult = async () => {
   try {
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
     const searchResultDate = await res.json();
     return searchResultDate;
   } catch (error) {
     console.log(error);
   }
 };