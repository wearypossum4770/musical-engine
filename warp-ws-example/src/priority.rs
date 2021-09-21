#[derive(Debug)]
struct Highest<'a> {
  default: &'a str,
  name: String,
  value: i8,
}
#[derive(Debug)]
struct High<'a> {
  default: &'a str,
  name: String,
  value: i8,
}
#[derive(Debug)]
struct Medium<'a> {
  default: &'a str,
  name: String,
  value: i8,
}
#[derive(Debug)]
struct Normal<'a> {
  default: &'a str,
  name: String,
  value: i8,
}
#[derive(Debug)]
struct Low<'a> {
  default: &'a str,
  name: String,
  value: i8,
}
#[derive(Debug)]
struct Lowest<'a> {
  default: &'a str,
  name: String,
  value: i8,
}
#[derive(Debug)]
struct Immediate<'a> {
  default: &'a str,
  name: String,
  value: i8=1,
}
#[derive(Debug)]
struct Blocker<'a> {
  default: &'a str,
  name: String,
  value: i8,
}
fn highest_priority () -> &'static str {
    Highest {default:"Highest"}.default
}
fn high_priority () -> &'static str {
    High {default:"High"}.default
}
fn medium_priority () -> &'static str {
    Medium {default:"Medium"}.default
}
fn normal_priority () -> &'static str {
    Normal {default:"Normal"}.default
}
fn low_priority () -> &'static str {
    Low {default:"Low"}.default
}
fn lowest_priority () -> &'static str {
    Lowest {default:"Lowest"}.default
}
fn immediate_priority () -> &'static str {
    Immediate {default:"Immediate", ..}.default
}
fn blocker_priority () -> &'static str {
    Blocker {default:"Blocker"}.default
}
pub fn setPriority(priority: i8) -> &str {

}
// pub fn upgradePriority(){}
// pub fn downgradePriority(){}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

     #[test]
    fn test_set_highest_priority() {
        assert_eq!(highest_priority() , "Highest")
    }
     #[test]
    fn test_set_high_priority() {
        assert_eq!(high_priority() , "High")
    }
     #[test]
    fn test_set_medium_priority() {
        assert_eq!(medium_priority() , "Medium")
    }
     #[test]
    fn test_set_normal_priority() {
        assert_eq!(normal_priority() , "Normal")
    }
     #[test]
    fn test_set_low_priority() {
        assert_eq!(low_priority() , "Low")
    }
     #[test]
    fn test_set_lowest_priority() {
        assert_eq!(lowest_priority() , "Lowest")
    }
     #[test]
    fn test_set_immediate_priority() {
        assert_eq!(immediate_priority() , "Immediate")
    }
     #[test]
    fn test_set_blocker_priority() {
        assert_eq!(blocker_priority() , "Blocker")
    }
}