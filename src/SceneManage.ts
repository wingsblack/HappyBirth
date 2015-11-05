class SceneManage {

    private container: egret.DisplayObjectContainer

    private static __obj: SceneManage;

    public static go(num: number, dir: string) {
        SceneManage.__obj.go(num, dir);

    }

    public static get(num: number): any {
        return this.__obj.list[num];
    }

    public currentScene: IScene;
    public current: number;
    public target: number = 0;
    public targetScene: IScene;

    public list: IScene[] = [];



    public constructor(display: egret.DisplayObjectContainer) {
        this.container = display;
        if (SceneManage.__obj == null) {
            SceneManage.__obj = this;
        } else {
            return SceneManage.__obj;
        }
    }

    public init() {

        this.list.push(
            new Scene1(),
            new Scene2(),
            new Scene3(),
            new Scene4(),
            new Scene7(),
            new Scene8()
            );

        this.current = 0;
        this.currentScene = this.list[this.current];

        this.container.addChild(this.currentScene);

        this.currentScene.init();
        this.currentScene.isinit = true;

        this.currentScene.beginstart();

        this.currentScene.onstart();

        this.container.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.container.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.container.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        //SceneManage.go(5, "left");
    }

    private isDown: boolean = false;
    private dir: number = 0;
    private DownY: number = 0;
    private isEnable = false;
    private onTouchBegin(e: egret.TouchEvent) {
        if (this.isEnable) return;
        this.isDown = true;
        this.DownY = e.stageY;
    }

    private onTouchMove(e: egret.TouchEvent) {
        if (!this.isDown || this.isEnable) return;
        var y = e.stageY,
            jl = this.DownY - y;
        if (this.dir == 0) {
            this.dir = jl > 0 ? -1 : 1;
            if (this.dir == -1) this.target = this.current + 1;
            else if (this.dir == 1) this.target = this.current - 1;

            if (this.target >= this.list.length || this.target < 0) {
                this.dir = 0;
                return;
            }
            this.targetScene = this.list[this.target];
            this.container.addChild(this.targetScene);
            if (!this.targetScene.isinit) {
                this.targetScene.init();
                this.targetScene.isinit = true;
            }
            this.targetScene.beginstart();

        }
        if (this.dir != 0 && this.targetScene) {
            if (this.dir == -1)
                this.targetScene.y = this.container.stage.stageHeight - jl;
            else
                this.targetScene.y = -this.container.stage.stageHeight - jl;
        }


    }

    private onTouchEnd() {
        if (this.isEnable) return;
        this.isDown = false;
        if (this.dir != 0) {
            this.isEnable = true;
         
            egret.Tween.get(this.targetScene).to({ y: 0 }, 1000, egret.Ease.cubicInOut).call(() => {
                this.isEnable = false;
                this.container.removeChild(this.currentScene);
                this.current = this.target;
                this.currentScene = this.targetScene;
                this.currentScene.onstart();

            });
        }
        this.dir = 0;
    }



    public go(num: number, dir: string) {
        if (this.current == num) return;

        var target: IScene = this.list[num];
        this.container.addChild(target);

        if (!target.isinit) {
            target.init();
            target.isinit = true;
        }

        target.beginstart();
        target.x = 0;


        var tw: egret.Tween = egret.Tween.get(target);
        tw.to({ x: 0 }, 0, egret.Ease.cubicInOut).call(this.onMoveCompalte, this, [target, num]);

        egret.Tween.get(this.currentScene).to({ x: 0 }, 0, egret.Ease.cubicInOut)

    }

    private onMoveCompalte(e: IScene, num: number) {
        this.currentScene.onend();
        this.container.removeChild(this.currentScene);

        this.current = num;
        this.currentScene = this.list[this.current];
        this.currentScene.onstart();


    }



}