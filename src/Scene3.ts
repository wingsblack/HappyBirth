class Scene3 extends IScene {

    private bg: egret.Bitmap; //背景
    private list: egret.DisplayObject[];



    public init() {
        this.list = [];

        var tmp: egret.Bitmap;
        this.bg = new egret.Bitmap(RES.getRes("bg_1"));



        var tmp2: egret.TextField;

        tmp2 = Utils.getText("p3_1");
        this.list.push(tmp2);

        tmp2 = Utils.getText("p3_2");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p3_3");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p3_4");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p3_5");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);
       

        tmp = new egret.Bitmap(RES.getRes("sp_2.img_4_2"));
        this.list.push(tmp);

        var tmp3: egret.Shape = new egret.Shape();
        tmp3.graphics.beginFill(0xea68a2);
        tmp3.graphics.drawRect(0, 0, 529, 125);
        tmp3.graphics.endFill();
        tmp3.cacheAsBitmap = true;
        this.list.push(tmp3);

        tmp2 = Utils.getText("p3_6");
        this.CommonStyle(tmp2);
        tmp2.lineSpacing = 16;
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



        tmp = <egret.TextField>this.list[0];
        tmp.x = 63;
        tmp.y = 53 + 25;
        tmp.lineSpacing = 15;
        tmp.wait = 500;
        tmp.to = {
            y: 33,
            alpha: 1
        }

        tmp.alpha = 0;
        tmp.width = 526;


        tmp = <egret.TextField>this.list[6];
        tmp.x = 63;
        tmp.y = 133 + 25;
        tmp.wait = 1300;
        tmp.to = {
            y: 128,
            alpha: 1
        }

        tmp.alpha = 0;
        tmp.width = 1300;
       

        tmp = <egret.TextField>this.list[7];
        tmp.x = 83;
        tmp.y = 153 + 25;
        tmp.lineSpacing = 15;
        tmp.wait = 1300;
        tmp.to = {
            y: 153,
            alpha: 1
        }

        tmp.alpha = 0;
        tmp.width = 526;

        tmp = <egret.TextField>this.list[1];
        tmp.wait = 2100;
        tmp.alpha = 0;
        tmp.textAlign = "center"
        tmp.to = {
            y: 320,
            alpha: 1
        }
        tmp.x = 180;
        tmp.y = 320 + 25;
      

        tmp = <egret.TextField>this.list[5];
        tmp.width = 202;
        tmp.height = 178;
        tmp.wait = 2100;
        tmp.alpha = 0;
        tmp.to = {
            y: 277,
            alpha: 1
        }
        tmp.x = 71;
        tmp.y = 277 - 25;
      
        tmp = <egret.TextField>this.list[2];
        tmp.wait = 2900;
        tmp.alpha = 0;
        tmp.to = {
            y: 500,
            alpha: 1
        }
        tmp.x = 62;
        tmp.y = 500 + 25;

        tmp = <egret.TextField>this.list[3];
        tmp.wait = 3800;
        tmp.alpha = 0;
        tmp.to = {
            y: 680,
            alpha: 1
        }
        tmp.x = 62;
        tmp.y = 680 + 25;


        tmp = <egret.TextField>this.list[4];
        tmp.wait = 4600;
        tmp.alpha = 0;
        tmp.to = {
            y: 830,
            alpha: 1
        }
        tmp.x = 62;
        tmp.y = 830 + 25;





        //tmp = <egret.TextField>this.list[6];
        //tmp.wait = 1700;
        //tmp.alpha = 0;
        //tmp.to = {
        //    y: 709,
        //    alpha: 1
        //}
        //tmp.x = 62;
        //tmp.y = 709 + 25;



       
    }




    public onstart() {
        this.list.forEach((value: any, index: number, array: egret.DisplayObject[]) => {
            this.addChild(value);

            if (value.to) {
                var tw: egret.Tween = egret.Tween.get(value);
                value.wait && tw.wait(value.wait);
                tw.to(value.to, value.speed ? value.speed : 800);

            }
        });




    }





}