class Scene4 extends IScene {

    private bg: egret.Bitmap; //背景
    private list: egret.DisplayObject[];
    private logo: egret.Bitmap; //LOGO标志


    public init() {
        this.list = [];

        var tmp: egret.Bitmap;
        this.bg = new egret.Bitmap(RES.getRes("bg_1"));

        tmp = new egret.Bitmap(RES.getRes("sp_2.img_4_1"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_2.4_03"))
        this.list.push(tmp);



        var tmp2: egret.TextField;
        tmp2 = Utils.getText("p4_1");
     
        this.list.push(tmp2);

        tmp2 = Utils.getText("p4_2");
        tmp2.textAlign = "center";
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p4_3");
        tmp2.textAlign = "center";
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp = new egret.Bitmap(RES.getRes("sp_2.4_07"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_1.logo"));
        tmp.width = 173;
        tmp.height = 173;
        tmp.rotation = -360;
        tmp.y = 140
        tmp.x = -tmp.width;
        tmp.anchorOffsetX = tmp.width / 2;
        tmp.anchorOffsetY = tmp.height / 2;
        this.list.push(tmp);
        this.logo = tmp;

    }

    private CommonStyle(tmp2: egret.TextField) {
        tmp2.multiline = true;
        tmp2.width = 526;
        tmp2.lineSpacing = 12;
    }





    public beginstart() {
        this.removeChildren();
        this.addChild(this.bg);

        var tmp: any;


        tmp = this.list[1];
        tmp.x = 340;
        tmp.y = -tmp.height;
        
       
        tmp = this.list[0];
        tmp.width = 202;
        tmp.height = 178;
        tmp.x = 359 + 25;
        tmp.alpha = 0;
        tmp.wait = 500;
        tmp.y = 280 
        tmp.to = {
            x: 359,
            alpha: 1
        } 
      

        tmp = this.list[3];
        tmp.x = 189 - 25;
        tmp.y = 488 ;
        tmp.alpha = 0;
        tmp.wait = 500;
        tmp.to = {
            x: 189 ,
            alpha:1
        } 

       

        tmp = this.list[2];
        tmp.x = 40;
        tmp.y = 300 + 10;
        tmp.width = 260;
        tmp.alpha = 0;
        tmp.wait = 1500;
        tmp.lineSpacing = 14;
        tmp.to = {
            y: 300,
            alpha: 1
        } 
        
        tmp = this.list[5];
        tmp.x = 46;
        tmp.y = 622 + 10;
   

        tmp.alpha = 0;
        tmp.wait = 2500;
        tmp.to = {
            y: 622,
            alpha: 1
        } 

        tmp = this.list[4];
        tmp.x = 353;
        tmp.y = 742 + 10;
        tmp.width = 220;

        tmp.alpha = 0;
        tmp.wait = 2500;
        tmp.to = {
            y: 742,
            alpha: 1
        } 
   

       

    }




    public onstart() {
        this.list.forEach((value: any, index: number, array: egret.DisplayObject[]) => {
            this.addChild(value);
            if (value.to) {
                egret.Tween.get(value).wait(value.wait).to(value.to, 800);
            }            
        });

        egret.Tween.get(this.list[1]).wait(500).to({
            y: 78
        }, 1200, egret.Ease.bounceOut);

      
        
        egret.Tween.get(this.logo).wait(3300)
            .to({
                x: 85 + this.logo.anchorOffsetX,
                rotation: 0
            }, 1500);

    }





}