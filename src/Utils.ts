class Utils {
    public static getText(name: string): egret.TextField {
        var obj: any = RES.getRes("description");
        var parser: egret.HtmlTextParser = new egret.HtmlTextParser();
        var txt: egret.TextField = new egret.TextField();
        var textFlow: egret.ITextElement[] = parser.parser(obj[name]);
        txt.textFlow = textFlow;

        return txt;
    }
}