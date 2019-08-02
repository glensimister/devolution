class MailBox extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div class="grid-mailbox">
    <div>
        <div class="form-group"><a href="#/mailbox/compose" class="btn btn-blue" style="width:100%">COMPOSE</a></div>
        <!--<h3>Folders <button type="button" class="btn pull-right" data-widget="collapse"><i class="fa fa-minus"></i>
            </button></h3>-->

        <ul>
            <li class="active"><a href="#/mailbox/mailbox"><i class="fa fa-inbox"></i> Inbox
                    <span class="label-inbox label-red pull-right">12</span></a></li>
            <li><a href="#"><i class="fa fa-envelope-o"></i> Sent</a></li>
            <!--<li><a href="#"><i class="fa fa-file-text-o"></i> Drafts</a></li>-->
            <!--<li><a href="#"><i class="fa fa-filter"></i> Junk <span class="label label-warning pull-right">65</span></a>
            </li>-->
            <li><a href="#"><i class="fa fa-trash-o"></i> Trash</a></li>
        </ul>

        <!--<h3>Labels <button type="button" class="btn pull-right" data-widget="collapse"><i class="fa fa-minus"></i>
            </button></h3>
        <ul>
            <li><a href="#"><i class="fa fa-circle-o text-red"></i> Important</a></li>
            <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> Promotions</a></li>
            <li><a href="#"><i class="fa fa-circle-o text-light-blue"></i> Social</a></li>
        </ul>-->
    </div>
    <!-- /.col -->
    <div>
        <h3>Inbox (design in progress)</h3>
        <div>
            <button type="button" class="btn btn-default"><i class="fa fa-square-o"></i></button>
            <button type="button" class="btn btn-default"><i class="fa fa-trash-o"></i></button>
            <button type="button" class="btn btn-default"><i class="fa fa-reply"></i></button>
            <button type="button" class="btn btn-default"><i class="fa fa-share"></i></button>
            <button type="button" class="btn btn-default"><i class="fa fa-refresh"></i></button>
        </div>
        <!--
        <div class="pull-right">
            1-50/200
            <div>
                <button type="button" class="btn btn-default btn-sm"><i class="fa fa-chevron-left"></i></button>
                <button type="button" class="btn btn-default btn-sm"><i class="fa fa-chevron-right"></i></button>
            </div>
        </div> -->

        <table>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td class="mailbox-star"><a href="#"><i class="fa fa-star"></i></a></td>
                    <td class="mailbox-name"><a href="#/mailbox/readmail">Alexander Pierce</a></td>
                    <td class="mailbox-subject"><b>Nemo enim ipsam</b> - Voluptas sit aspernatur aut odit aut fugit....
                    </td>
                    <td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
                    <td class="mailbox-date">5 mins ago</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td class="mailbox-star"><a href="#"><i class="fa fa-star-o"></i></a></td>
                    <td class="mailbox-name"><a href="#/mailbox/readmail">Alexander Pierce</a></td>
                    <td class="mailbox-subject"><b>Nemo enim ipsam</b> - Voluptas sit aspernatur aut odit aut fugit....
                    </td>
                    <td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
                    <td class="mailbox-date">5 mins ago</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td class="mailbox-star"><a href="#"><i class="fa fa-star"></i></a></td>
                    <td class="mailbox-name"><a href="#/mailbox/readmail">Alexander Pierce</a></td>
                    <td class="mailbox-subject"><b>Nemo enim ipsam</b> - Voluptas sit aspernatur aut odit aut fugit....
                    </td>
                    <td class="mailbox-attachment"><i class="fa fa-paperclip"></i></td>
                    <td class="mailbox-date">5 mins ago</td>
                </tr>
            </tbody>
        </table>

        <!-- Check all button -->

        <div>
            <button type="button" class="btn btn-default"><i class="fa fa-square-o"></i></button>
            <button type="button" class="btn btn-default"><i class="fa fa-trash-o"></i></button>
            <button type="button" class="btn btn-default"><i class="fa fa-reply"></i></button>
            <button type="button" class="btn btn-default"><i class="fa fa-share"></i></button>
            <button type="button" class="btn btn-default"><i class="fa fa-refresh"></i></button>
        </div>

        <!--
        <div class="pull-right">
            1-50/200
            <button type="button" class="btn btn-default btn-sm"><i class="fa fa-chevron-left"></i></button>
            <button type="button" class="btn btn-default btn-sm"><i class="fa fa-chevron-right"></i></button>
        </div> -->
`;
    }
}
customElements.define('mail-box', MailBox);