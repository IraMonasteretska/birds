<?php /*Template Name: Demo*/

get_header('white');
$title_dark_demo = get_field('title_dark_demo');
$title_white_demo = get_field('title_white_demo');
$text_demo = get_field('text_demo');
?>
<section class="democontent">
    <img class="lightbg" src="<?php echo SD_THEME_IMAGE_URI; ?>/demobgpic.png" alt="image">
    <div class="container-fluid">
        <div class="democontent-sect">
            <div class="row">
                <div class="col-lg-4 offset-lg-1">
                    <div class="wrap">
                        <p class="title">
                            <?php echo $title_dark_demo; ?>
                            <span><?php echo $title_white_demo; ?></span>
                        </p>
                        <p class="linebefore">
                            <?php echo $text_demo; ?>
                        </p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="demoform">
                        <div class="formwrapper">
                            <img class="formimg" src="<?php echo SD_THEME_IMAGE_URI; ?>/demopic.svg" alt="image">
                            <!-- Note :
   - You can modify the font style and form style to suit your website. 
   - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. 
   - The Mandatory check script can modified as to suit your business needs. 
   - It is important that you test the modified form before going live.-->
                            <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' >
                                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                                <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>
                                <form action='https://crm.zoho.com/crm/WebToLeadForm' name=WebToLeads4792568000000329019 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory4792568000000329019()' accept-charset='UTF-8'>
                                    <input type='text' style='display:none;' name='xnQsjsdp' value='cd6c326e172fd932cafa98e8bf26805cab1f05697703da72334d68baf1610d35'></input>
                                    <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
                                    <input type='text' style='display:none;' name='xmIwtLD' value='efdc4425a317c3121c002259d28c263bfe074112e351d6210796fc855d091523'></input>
                                    <input type='text' style='display:none;' name='actionType' value='TGVhZHM='></input>
                                    <input type='text' style='display:none;' name='returnURL' value='https://staging.anythree.com/'> </input>
                                    <!-- Do not remove this code. -->
                            
                                   





                                        <div class="row">
                                    <div class='zcwf_row col-lg-6'>
                                        <div class='zcwf_col_fld '><input type='text' placeholder="First Name"  id='First_Name' name='First Name' maxlength='40'></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>
                                    <div class='zcwf_row col-lg-6'>
                                        <div class='zcwf_col_fld'><input type='text' placeholder="Last Name" id='Last_Name' name='Last Name' maxlength='80'></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>


                                    <div class='zcwf_row col-12'>
                                        <div class='zcwf_col_fld'><input type='text' placeholder="Email address" ftype='email' id='Email' name='Email' maxlength='100'></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                        <div class='zcwf_col_fld'><textarea id='Description' placeholder="Message" name='Description'></textarea>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>


                                
                                    <div class='zcwf_row col-12'>
                                        <div class='zcwf_col_lab'></div>
                                        <div class='zcwf_col_fld'>
                                        <button  id='formsubmit' class='formsubmit zcwf_button darkblue-btn' value='Submit'>Get the guide</button>    
                                        <!-- <input type='submit' id='formsubmit' class='formsubmit zcwf_button darkblue-btn' value='Submit' title='Submit'> -->
                                        </div>
                                    </div>
                                    </div>
                                    <script>
                                        function validateEmail4792568000000329019() {
                                            var form = document.forms['WebToLeads4792568000000329019'];
                                            var emailFld = form.querySelectorAll('[ftype=email]');
                                            var i;
                                            for (i = 0; i < emailFld.length; i++) {
                                                var emailVal = emailFld[i].value;
                                                if ((emailVal.replace(/^\s+|\s+$/g, '')).length != 0) {
                                                    var atpos = emailVal.indexOf('@');
                                                    var dotpos = emailVal.lastIndexOf('.');
                                                    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                                                        alert('Please enter a valid email address. ');
                                                        emailFld[i].focus();
                                                        return false;
                                                    }
                                                }
                                            }
                                            return true;
                                        }

                                        function checkMandatory4792568000000329019() {
                                            var mndFileds = new Array('Last Name');
                                            var fldLangVal = new Array('Last Name');
                                            for (i = 0; i < mndFileds.length; i++) {
                                                var fieldObj = document.forms['WebToLeads4792568000000329019'][mndFileds[i]];
                                                if (fieldObj) {
                                                    if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                                                        if (fieldObj.type == 'file') {
                                                            alert('Please select a file to upload.');
                                                            fieldObj.focus();
                                                            return false;
                                                        }
                                                        alert(fldLangVal[i] + ' cannot be empty.');
                                                        fieldObj.focus();
                                                        return false;
                                                    } else if (fieldObj.nodeName == 'SELECT') {
                                                        if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                                                            alert(fldLangVal[i] + ' cannot be none.');
                                                            fieldObj.focus();
                                                            return false;
                                                        }
                                                    } else if (fieldObj.type == 'checkbox') {
                                                        if (fieldObj.checked == false) {
                                                            alert('Please accept  ' + fldLangVal[i]);
                                                            fieldObj.focus();
                                                            return false;
                                                        }
                                                    }
                                                    try {
                                                        if (fieldObj.name == 'Last Name') {
                                                            name = fieldObj.value;
                                                        }
                                                    } catch (e) {}
                                                }
                                            }
                                            if (!validateEmail4792568000000329019()) {
                                                return false;
                                            }
                                            document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
                                        }

                                        function tooltipShow4792568000000329019(el) {
                                            var tooltip = el.nextElementSibling;
                                            var tooltipDisplay = tooltip.style.display;
                                            if (tooltipDisplay == 'none') {
                                                var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
                                                for (i = 0; i < allTooltip.length; i++) {
                                                    allTooltip[i].style.display = 'none';
                                                }
                                                tooltip.style.display = 'block';
                                            } else {
                                                tooltip.style.display = 'none';
                                            }
                                        }
                                    </script>
                                    <!-- Do not remove this --- Analytics Tracking code starts -->
                                    <script id='wf_anal' src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=efdc4425a317c3121c002259d28c263bfe074112e351d6210796fc855d091523gidcd6c326e172fd932cafa98e8bf26805cab1f05697703da72334d68baf1610d35gid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513'></script><!-- Do not remove this --- Analytics Tracking code ends. -->
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="bublewrapp">
        <div class="bubble w5" style="animation-delay: 0s; left: 50%;"></div>
        <div class="bubble w10" style="animation-delay: 0s; left: 10%;"></div>
        <div class="bubble w15" style="animation-delay: 0s; left: 75%;"></div>
        <div class="bubble w5" style="animation-delay: 1.5s; left: 13%;"></div>
        <div class="bubble w10" style="animation-delay: .7s; left: 87%;"></div>
        <div class="bubble w15" style="animation-delay: .9s; left: 48%;"></div>
        <div class="bubble w5" style="animation-delay: 1.2s; left: 49%;"></div>
        <div class="bubble w10" style="animation-delay: 0s; left: 54%;"></div>
        <div class="bubble w15" style="animation-delay: .6s; left: 78%;"></div>
        <div class="bubble w5" style="animation-delay: .4s; left: 74%;"></div>
        <div class="bubble w10" style="animation-delay: 1.8s;left: 10%;"></div>
        <div class="bubble w15" style="animation-delay: 1.1s;left: 16%;"></div>
        <div class="bubble w10" style="animation-delay: 0.3s;left: 22%;"></div>
        <div class="bubble w15" style="animation-delay: 0.5s;left: 90%;"></div>
    </div>
</section>


</body>

<?php get_footer('hide'); ?>