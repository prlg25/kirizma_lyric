# キリズマ歌詞表示作成ツール

* [https://prlg25.github.io/kirizma_lyric/](https://prlg25.github.io/kirizma_lyric/)

## これはなに
* [キリズマ](https://suzme.github.io/kirizma/)の歌詞表示を作るツールです。

## 使い方
1. キリズマ公開ページのHTMLのCSSに以下のような記述を追加します。
    * CSSをカスタマイズすれば色んな歌詞表示が実装できるはずです。
    * 以下のコードは[未来の歌 / izkdic氏](https://vorhandensein.sakura.ne.jp/danoni/100k_mirai/)の実装をもとにしています。
    ```css
    .lyric {
    font-size: 22px;
    color: #FFFFFF;
    }
    @keyframes lyricin1{
        0%{
            opacity: 0.0;
            transform: translateY(+27px);
        }
        100%{
            opacity: 0.5;
            transform: translateY(0px);
        }
    }

    @keyframes lyricin2{
        0%{
            opacity: 0.5;
            transform: translateY(+27px);
        }
        100%{
            opacity: 1.0;
            transform: translateY(0px);
        }
    }

    @keyframes lyricout{
        0%{
            opacity: 1.0;
            transform: translateY(0px);
        }
        100%{
            opacity: 0.0;
            transform: translateY(-27px);
        }
    }
    ```
1. 歌詞データを表示させたいタイミングに合わせて任意の譜面エディタでノートを置き、dosデータを出力します。
    * ツールの一番下のテキストボックスでどのデータを使うかを指定します。デフォルトではright_dataです。
    * 歌詞の行数+2ノート置く必要があります。（最初の予告が表示されるタイミング、最後が消えるタイミング）

1. 「ここに歌詞データを入力」と表示されているテキストボックスに歌詞データを入力します。
    * 空行を入れることで何も表示されず待機状態の歌詞のみ表示されている状態を作れます。
    * 2行空行を入れることで待機状態の歌詞も表示されない状態を作れます。
    ```
    あかりをつけましょ ぼんぼりに
    おはなをあげましょ もものはな
    ごにんばやしの ふえたいこ
    きょうはたのしい ひなまつり

    おだいりさまと おひなさま
    ふたりならんで すましがお
    およめにいらした ねえさまに
    よくにたかんじょの しろいかお
    ```

1. 「ここにdosデータを入力」と表示されているテキストボックスにdosデータをコピペします。
    * 指定したデータだけでもOKですがいっぺんに張り付けても大丈夫なはずです。
    ```
    |left_data=|down_data=|up_data=|right_data=239,733,980,1226,1473,1700,1926,2173,2687,2913,3000|space_data=|frzLeft_data=|frzDown_data=|frzUp_data=|frzRight_data=|frzSpace_data=|
    |speed_data=|boost_data=|
    ```

1. Goを押すと歌詞データ(mask_data)が出力されるのでdosにコピペします。
    * どのように歌詞表示されるかのサンプルは[こちら](http://pw25.g2.xrea.com/yrod/)から確認ください。
    ```
    |mask_data=
    239,0,あかりをつけましょ ぼんぼりに,lyric,100,37,,,0.5,lyricin1,27
    733,1,あかりをつけましょ ぼんぼりに,lyric,100,10,,,1,lyricin2,27
    980,2,あかりをつけましょ ぼんぼりに,lyric,100,10,,,1,lyricout,27
    1006,2
    733,0,おはなをあげましょ もものはな,lyric,100,37,,,0.5,lyricin1,27
    980,1,おはなをあげましょ もものはな,lyric,100,10,,,1,lyricin2,27
    1226,2,おはなをあげましょ もものはな,lyric,100,10,,,1,lyricout,27
    1252,2
    980,0,ごにんばやしの ふえたいこ,lyric,100,37,,,0.5,lyricin1,27
    1226,1,ごにんばやしの ふえたいこ,lyric,100,10,,,1,lyricin2,27
    1473,2,ごにんばやしの ふえたいこ,lyric,100,10,,,1,lyricout,27
    1499,2
    1226,0,きょうはたのしい ひなまつり,lyric,100,37,,,0.5,lyricin1,27
    1473,1,きょうはたのしい ひなまつり,lyric,100,10,,,1,lyricin2,27
    1700,2,きょうはたのしい ひなまつり,lyric,100,10,,,1,lyricout,27
    1726,2
    1473,0,,lyric,100,37,,,0.5,lyricin1,27
    1700,1,,lyric,100,10,,,1,lyricin2,27
    1926,2,,lyric,100,10,,,1,lyricout,27
    1952,2
    1700,0,おだいりさまと おひなさま,lyric,100,37,,,0.5,lyricin1,27
    1926,1,おだいりさまと おひなさま,lyric,100,10,,,1,lyricin2,27
    2173,2,おだいりさまと おひなさま,lyric,100,10,,,1,lyricout,27
    2199,2
    1926,0,ふたりならんで すましがお,lyric,100,37,,,0.5,lyricin1,27
    2173,1,ふたりならんで すましがお,lyric,100,10,,,1,lyricin2,27
    2687,2,ふたりならんで すましがお,lyric,100,10,,,1,lyricout,27
    2713,2
    2173,0,およめにいらした ねえさまに,lyric,100,37,,,0.5,lyricin1,27
    2687,1,およめにいらした ねえさまに,lyric,100,10,,,1,lyricin2,27
    2913,1,およめにいらした ねえさまに,lyric,100,10,,,1,lyricout,27
    2939,1
    2687,0,よくにたかんじょの しろいかお,lyric,100,37,,,0.5,lyricin1,27
    2913,0,よくにたかんじょの しろいかお,lyric,100,10,,,1,lyricin2,27
    3000,0,よくにたかんじょの しろいかお,lyric,100,10,,,1,lyricout,27
    3026,0
    |
    ```

## Thanks
* [izkdic](https://vorhandensein.sakura.ne.jp)