class Scene2 extends IScene {

    private bg: egret.Bitmap; //背景
    private list: egret.DisplayObject[];



    public init() {
        this.list = [];

        var tmp: egret.Bitmap;
        this.bg = new egret.Bitmap(RES.getRes("bg_1"));



        var tmp2: egret.TextField;

        tmp2 = Utils.getText("p2_1");
        this.list.push(tmp2);

        tmp2 = Utils.getText("p2_2");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p2_3");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p2_4");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p2_5");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp = new egret.Bitmap(RES.getRes("sp_2.img_4_3"));
        this.list.push(tmp);

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
            y: 53,
            alpha: 1
        }

        tmp.alpha = 0;
        tmp.width = 526;




        tmp = <egret.TextField>this.list[1];
        tmp.wait = 1700;
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
        tmp.wait = 1700;
        tmp.alpha = 0;
        tmp.to = {
            y: 277,
            alpha: 1
        }
        tmp.x = 71;
        tmp.y = 277 -  25;
       
        tmp = <egret.TextField>this.list[2];
        tmp.wait = 2500;
        tmp.alpha = 0;
        tmp.to = {
            y: 500,
            alpha: 1
        }
        tmp.x = 62;
        tmp.y = 500 + 25;
      
        tmp = <egret.TextField>this.list[3];
        tmp.wait = 3300;
        tmp.alpha = 0;
        tmp.to = {
            y: 630,
            alpha: 1
        }
        tmp.x = 62;
        tmp.y = 630 + 25;
       

        tmp = <egret.TextField>this.list[4];
        tmp.wait = 4100;
        tmp.alpha = 0;
        tmp.to = {
            y: 780,
            alpha: 1
        }
        tmp.x = 62;
        tmp.y = 780 + 25;





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