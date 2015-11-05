class Scene6 extends IScene {

    private bg: egret.Bitmap; //背景
    private list: egret.DisplayObject[];



    public init() {
        this.list = [];

        var tmp: egret.Bitmap;
        this.bg = new egret.Bitmap(RES.getRes("bg_2"));



        var tmp2: egret.TextField;

        tmp2 = Utils.getText("p6_1");
        this.list.push(tmp2);

        tmp2 = Utils.getText("p6_2");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p6_3");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p6_4");
        this.CommonStyle(tmp2);
        this.list.push(tmp2);

        tmp2 = Utils.getText("p6_5");
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



        tmp = <egret.TextField>this.list[0];
        tmp.x = 0;
        tmp.y = 53 + 25;
        tmp.wait = 500;
        tmp.width = this.stage.stageWidth;
        tmp.to = {
            y: 53,
            alpha: 1
        }
        tmp.alpha = 0;
        tmp.textAlign = "center";



        tmp = <egret.TextField>this.list[1];
        tmp.wait = 1700;
        tmp.alpha = 0;
        tmp.to = {
            y: 165,
            alpha: 1
        }
        tmp.x = 62;
        tmp.y = 165 + 25;
        tmp.width = 525;

        tmp = <egret.TextField>this.list[2];
        tmp.wait = 1700;
        tmp.alpha = 0;
        tmp.to = {
            y: 345,
            alpha: 1
        }
        tmp.x = 62;
        tmp.y = 345 + 25;

        tmp = <egret.TextField>this.list[3];
        tmp.wait = 2500;
        tmp.alpha = 0;
        tmp.to = {
            y: 719 -150,
            alpha: 1
        }
        tmp.x = 62;
        tmp.y = 719 - 150 + 25;


        tmp = <egret.TextField>this.list[4];
        tmp.wait = 2500;
        tmp.alpha = 0;
        tmp.to = {
            y: 874 - 150,
            alpha: 1
        }
        tmp.x = 62;
        tmp.y = 874 -150 + 25;




    }




    public onstart() {
        this.list.forEach((value: any, index: number, array: egret.DisplayObject[]) => {
            this.addChild(value);

            if (value.to) {
                egret.Tween.get(value).wait(value.wait).to(value.to, 800);
            }  
        });




    }





}