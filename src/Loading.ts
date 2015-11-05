class Loading extends egret.Sprite {


    private ui: egret.Bitmap;

    public constructor() {

        super();


        this.ui = new egret.Bitmap(RES.getRes("sp_1.logo"));

        this.addChild(this.ui);

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
    }


    private onAddedToStage() {

        var w = this.stage.stageWidth, h = this.stage.stageHeight;
        this.ui.anchorOffsetX = this.ui.width / 2;
        this.ui.anchorOffsetY = this.ui.height / 2;
        this.ui.x = w / 2;
        this.ui.y = h / 2;
        this.ui.rotation = 0;

        egret.Tween.get(this.ui).to({
            rotation: 1440
        }, 2500, egret.Ease.quadIn).call(() => {
            this.ui.rotation = 1440;
            egret.Tween.get(this.ui, { loop: true }).to({
                rotation: 3600
            }, 2500)
        })
    }






}