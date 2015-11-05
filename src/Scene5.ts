class Scene5 extends IScene {

    private bg: egret.Bitmap; //背景
    private list: egret.DisplayObject[];



    public init() {
        this.list = [];

        var tmp: egret.Bitmap;
        this.bg = new egret.Bitmap(RES.getRes("bg_2"));

        tmp = new egret.Bitmap(RES.getRes("sp_2.img_4_3"))
        this.list.push(tmp);

        tmp = new egret.Bitmap(RES.getRes("sp_2.img_4_4"))
        this.list.push(tmp);

        var tmp2: egret.TextField;
        tmp2 = Utils.getText("p4_1");
        tmp2.textAlign = "center";                
        this.list.push(tmp2);
        
       
        


        tmp2 = Utils.getText("p5_1");
        tmp2.textAlign = "center";
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p5_2");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p5_3");
        this.CommonStyle(tmp2);
        tmp2.textAlign = "center";
        this.list.push(tmp2);

        tmp2 = Utils.getText("p5_4");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

      


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


        tmp = this.list[0];
        tmp.x = 31;
        tmp.y = -tmp.height;
        


        tmp = this.list[1];
        tmp.x = 342;
        tmp.y =  - tmp.height 

       

        tmp = this.list[2];
        tmp.x = 259;
        tmp.y = 58 + 10;
        tmp.alpha = 0;
        tmp.wait = 1700;
        tmp.to = {
            y: 58,
            alpha:1
        } 

        tmp = this.list[3];
        tmp.x = 0;
        tmp.y = 448 + 10;
        tmp.width = 328;
      
        tmp.alpha = 0;
        tmp.wait = 2500;
        tmp.to = {
            y: 448,
            alpha: 1
        } 

        tmp = this.list[4];
        tmp.x =56;
        tmp.y = 622 + 10;
        tmp.width = 220;

        tmp.alpha = 0;
        tmp.wait = 2500;
        tmp.to = {
            y: 622,
            alpha: 1
        } 
        
        tmp = this.list[5];
        tmp.x = 328;
        tmp.y = 448 + 10;
        tmp.width = 328;

        tmp.alpha = 0;
        tmp.wait = 2500;
        tmp.to = {
            y: 448,
            alpha: 1
        }

        tmp = this.list[6];
        tmp.x = 360;
        tmp.y = 622 + 10;
        tmp.width = 220;

        tmp.alpha = 0;
        tmp.wait = 2500;
        tmp.to = {
            y: 622,
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

        egret.Tween.get(this.list[0]).wait(500).to({
            y: 178
        }, 1200, egret.Ease.bounceOut);

        egret.Tween.get(this.list[1]).wait(700).to({
            y: 178
        }, 1200, egret.Ease.bounceOut);
        


    }





}