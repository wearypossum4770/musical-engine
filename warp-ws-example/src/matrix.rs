#[derive(Debug)]
struct Task{
  action_status:String,
  reporter:String,
  story_points:i8,
  epic_link:String,
  priority:i8,
  category:i8,
}
//  modified MoSCoW category (MustHave, ShouldHave, NiceToHave, WouldHave, WontHave)
// https://www.stakeholdermap.com/agile/agile-dictionary-prince2-M.html#moscow
// https://www.stakeholdermap.com/project-templates/requirements-management-plan-template.html 
// https://www.stakeholdermap.com/project-templates/requirements-template.html 
// https://www.softwaretestinghelp.com/requirements-traceability-matrix/
// https://www.justinmind.com/blog/user-story-examples/
// http://www.randomhacks.net/2014/05/30/rust-heroku-rustful/