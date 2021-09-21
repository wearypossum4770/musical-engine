
#[derive(Debug)]
struct MustHave<'a> {
    default:String,
    name: String,
    value: i8,
} 

#[derive(Debug)]
struct ShouldHave<'a> {
    default:String,
    name: String,
    value: i8,
} 

#[derive(Debug)]
struct NiceToHave<'a> {
    default:String,
    name: String,
    value: i8,
}
#[derive(Debug)]
struct WouldHave<'a> {
    default:String,
    name: String,
    value: i8,
} 
#[derive(Debug)]
struct WontHave<'a> {
    default:String,
    name: String,
    value: i8,
}
fn  must__have_priority() -> &'static str {
    MustHave {default:"MustHave"}.default
}
fn  should_have_priority() -> &'static str {
    ShouldHave {default:"ShouldHave"}.default
} 
fn  Nice_to_have_priority() -> &'static str {
    NiceToHave {default:"NiceToHave"}.default
}
fn  would_have_priority() -> &'static str {
    WouldHave {default:"WouldHave"}.default
}
fn  wont_have_priority() -> &'static str {
    WontHave {default:"WontHave"}.default
}




#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

     #[test]
    fn test_set_highest_priority() {
        assert_eq!(highest_priority() , "Highest")
    }


    MustHave {default:"MustHave"}.default

    ShouldHave {default:"ShouldHave"}.default
    }
    NiceToHave {default:"NiceToHave"}.default
    
    WouldHave {default:"WouldHave"}.default
    
    WontHave {default:"WontHave"}.default
    

}