func isAnagram(s string, t string) bool {

    if(len(s)!= len(t) ){
        return false
    }
    count:=make(map[rune]int)
    for _,i:=range s{
        count[i]++
    }
    for _,j:=range t{
        count[j]--

        if count[j]<0{
            return false
        }
    }
return true    

}
