$compress = @{
    Path             = ".\background.js", ".\contentscript.js", ".\manifest.json"
    CompressionLevel = "Fastest"
    DestinationPath  = ".\TranslateSelection.zip"
}
Compress-Archive @compress