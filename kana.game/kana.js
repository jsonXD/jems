;

+
{ todos:
    [ "Add hiragana and katana yōon; e.g. ja:じゃ"
    , "Make dakuten, handakuten, and yōon named child fields of hiragana, katana, and romaji"
    ]
}

+
{ re:
    { id: "kana"
    , is: "The Japanese Hiragana, Katakana, and Romaji character sets."
    , by: "Michael Lee, @iskitz, iskitz.net"
    , at: "2016.01.15...28-08.00"
    , in: "san-jose.california.usa.earth"
    },

  hiragana:
    [ 'あ', 'か', 'さ' , 'た'  , 'な'  , 'は'   , 'ま', 'や', 'ら', 'わ'
    , 'い', 'き', 'し' , 'ち'  , 'に'  , 'ひ'   , 'み'      , 'り'
    , 'う', 'く', 'す' , 'つ'  , 'ぬ'  , 'ふ'   , 'む', 'ゆ', 'る', 'を'
    , 'え', 'け', 'せ' , 'て'  , 'ね'  , 'へ'   , 'め'      , 'れ'
    , 'お', 'こ', 'そ' , 'と'  , 'の'  , 'ほ'   , 'も', 'よ', 'ろ', 'ん'

        // dakuten
          , 'が', 'ざ' , 'だ'          , 'ば'
          , 'ぎ', 'じ' , 'ぢ'          , 'び'
          , 'ぐ', 'ず' , 'づ'          , 'ぶ'
          , 'げ', 'ぜ' , 'で'          , 'べ'
          , 'ご', 'ぞ' , 'ど'          , 'ぼ'

                                    //  handakuten
                                      , 'ぱ'
                                      , 'ぴ'
                                      , 'ぷ'
                                      , 'ぺ'
                                      , 'ぽ'
    ],

  katakana:
    [ 'ア', 'カ', 'サ' , 'タ'  , 'ナ'  , 'ハ'   , 'マ' , 'ヤ', 'ラ', 'ワ'
    , 'イ', 'キ', 'シ' , 'チ'  , 'ニ'  , 'ヒ'   , 'ミ'       , 'リ'
    , 'ウ', 'ク', 'ス' , 'ツ'  , 'ヌ'  , 'フ'   , 'ム' , 'ユ', 'ル', 'ヲ'
    , 'エ', 'ケ', 'セ' , 'テ'  , 'ネ'  , 'ヘ'   , 'メ'       , 'レ'
    , 'オ', 'コ', 'ソ' , 'ト'  , 'ノ'  , 'ホ'   , 'モ' , 'ヨ', 'ロ', 'ン'

        // dakuten
          , 'ガ', 'ザ' , 'ダ'          , 'バ'
          , 'ギ', 'ジ' , 'ヂ'          , 'ビ'
          , 'グ', 'ズ' , 'ヅ'          , 'ブ'
          , 'ゲ', 'ゼ' , 'デ'          , 'ベ'
          , 'ゴ', 'ゾ' , 'ド'          , 'ボ'

                                    //  handakuten
                                      , 'パ'
                                      , 'ピ'
                                      , 'プ'
                                      , 'ペ'
                                      , 'ポ'
    ],

  romaji:
    [ 'a', 'ka' , 'sa' , 'ta' , 'na'  , 'ha'  , 'ma'  , 'ya', 'ra', 'wa'
    , 'i', 'ki' , 'shi', 'chi', 'ni'  , 'hi'  , 'mi'        , 'ri'
    , 'u', 'ku' , 'su' , 'tsu', 'nu'  , 'hu'  , 'mu'  , 'yu', 'ru', 'wo'
    , 'e', 'ke' , 'se' , 'te' , 'ne'  , 'he'  , 'me'        , 're'
    , 'o', 'ko' , 'so' , 'to' , 'no'  , 'ho'  , 'mo'  , 'yo', 'ro', 'nn'

        // dakuten
         , 'ga' , 'za' , 'da'         , 'ba'
         , 'gi' , 'ji' , 'ji'         , 'bi'
         , 'gu' , 'zu' , 'zu'         , 'bu'
         , 'ge' , 'ze' , 'de'         , 'be'
         , 'go' , 'zo' , 'do'         , 'bo'

                                    //  handakuten
                                      , 'pa'
                                      , 'pi'
                                      , 'pu'
                                      , 'pe'
                                      , 'po'

        // yōon
         , 'kya', 'sha', 'cha', 'nya' , 'hya' , 'mya'       , 'rya'
         , 'kyu', 'shu', 'chu', 'nyu' , 'hyu' , 'myu'       , 'ryu'
         , 'kyo', 'sho', 'cho', 'nyo' , 'hyo' , 'myo'       , 'ryo'
         , 'gya', 'ja'                , 'bya'
         , 'gyu', 'ju'                , 'byu'
         , 'gyo', 'jo'                , 'byo'
                                      , 'pya'
                                      , 'pyu'
                                      , 'pyo'
    ]
}//+kana

;