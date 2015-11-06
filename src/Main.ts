


class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResouceLoadComplete, this);

        RES.loadConfig("resource/resource.json", "resource/");

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
        RES.loadGroup("reload", 2);
        RES.loadGroup("preload", 1);
    }



    private onAddedToStage(e: egret.Event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResouceLoadProgress, this);
    }

    private onResouceLoadComplete(e: RES.ResourceEvent) {
        if (e.groupName == "reload") {
            this.loading = new Loading();
            this.addChild(this.loading);


        } else if (e.groupName == "preload") {
            this.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResouceLoadProgress, this);
            this.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResouceLoadComplete, this);
            this.removeChildren();
          
            this.start();
        }
    }

    private loading: Loading;
    private onResouceLoadProgress(e: RES.ResourceEvent) {
        if (e.groupName !== "preload") return;
        var proess = e.itemsLoaded / e.itemsTotal;
    }



    private start() {

        var sceneManage: SceneManage = new SceneManage(this);
        sceneManage.init();

    }

}


