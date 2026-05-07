func isAnagram(s string, t string) bool {
 a :=[]rune(s)
 b:= []rune(t)
    if len(a)!= len(b){
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
