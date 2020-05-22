class Form  {
    constructor()
 {
    this.name = createInput("Enter Your Name")
    this.email = createInput("Enter Your Email")
    this.password = createInput("Enter Your Password")
    this.confirmation = createInput("Confirm Your Password")
    this.SignUp = createButton("Sign Up Now")
 }
 display(){
        var title = createElement("h2")
        title.html("INTERGALACTIC WARS")
        title.position(400,50)
        this.name.position(350,150)
        this.email.position(350,250)
        this.password.postion(350,350)
      this.confirmation.position(350,450)
        this.SignUp.position(350, 550)
        this.SignUp.mousePressed(()=>{
          this.name.hide();
          this.email.hide();
          this.password.hide();
          this.confirmation.hide();
          this.SignUp.hide();                         
        }
        )
        }
 }













































