<?php include"inc/head.php" ?>

    <header>
        <?php include "inc/logo-nav.php" ?>
        <!-- end of row logo nav -->
            <section>
                <div class="article-header">
                    <img src="img/header-about-us.jpg" height="400" width="1280" class="img-responsive">
                    <div class="mobile-image" style="background:url(img/header-about-us.jpg);"></div>
                    <div class="caption">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6"><h1>about us</h1></div>
                                <div class="col-lg-6"><h2 class="pull-right">company profile</h2></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </header>

    <article class="article">
        <div class="container">
            <div class="row awards">
                <div class="col-xs-12">
                    <div class="title" id="Award">
                         <h2><span>Awards</span></h2>
                     </div>
                </div>
                <!-- start of form -->
                <div class="col-xs-12">
                    <form class="form-horizontal">
                        <div class="radio">
                            <label>
                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                Option one is this and that&mdash;be sure to include why it's great
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                Option one is this and that&mdash;be sure to include why it's great
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                Option one is this and that&mdash;be sure to include why it's great
                            </label>
                        </div>
                        <div class="file-input">
                            <label for="exampleInputFile">File input</label>
                            <input type="file" id="exampleInputFile">
                            <p class="help-block">Example block-level help text here.</p>
                        </div>
                        <button type="submit" class="btn btn-default btn-submit">Submit</button>
                    </form>
                </div>
                <!-- eof form -->
            </div>
        </div>
    </article>

    <?php include "inc/footer.php"; ?>
