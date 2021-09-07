export default function Property({
    usedInOperations=true,
    hasPhysicalSubstance=true,
    notForResale = true,
    isLongTermAsset=true,
    acquisitionCost = 0,
}){
    if (!new.target) { // if you run me without new
        return new Property(arguments['0']); // ...I will add new for you
    }
    this.args = arguments['0']
    this.acquisitionCost = acquisitionCost
    this.isLongTermAsset = isLongTermAsset
    this.hasPhysicalSubstance = hasPhysicalSubstance 
    this.usedInOperations = usedInOperations
    this.notForResale = notForResale
    if (!this.usedInOperations && !this.notForResale ) {
        this.categorizations = 'investment_property|fair_market_value'
    }
    this.sayHi = function() {
        console.log( "My name is: Slim Shady " );
      };

}
let property = new Property({
    usedInOperations:true,notForResale : false
})
property.sayHi()
console.log(property)