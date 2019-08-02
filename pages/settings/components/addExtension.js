class AddExtension extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<h3>Upload Plugin</h3>
<p>Anyone can create and upload a plugin; however, they will need to be signed-off by an IT manager, who will be an elected official.</p>
<div class="form-group">
    <label for="">Upload Plugin</label>
    <input type="file" name="plugin">
</div>
<div class="form-group">
    <button class="btn btn-blue">SUBMIT</button>
</div>

<h4>Latest Plugins</h4>
<div class="grid-4-col plugins">
    <div>
        <div class="rate"></div>
        <h3>OkCupid: Online Dating</h3>
        <p><img src="img/okcupid.jpg"></p>
        <p class="plugin-desc">
            OkCupid is the only dating app that knows you're more substance than just a selfie—and it's free! Download it today to make meaningful connections with real ... </p>
        <p><a href="#" class="btn btn-blue">Read more</a></p>
    </div>
    <div>
        <div class="rate"></div>
        <h3>eBay</h3>
        <p><img src="img/eBay-logo-1.jpg" /></p>
        <p style="height:150px; overflow:hidden">eBay Inc. is a multinational e-commerce corporation based in San Jose, California that facilitates consumer-to-consumer and business-to-consumer sales through its website ... </p>
        <p><a href="#" class="btn btn-blue">Read more</a></p>
    </div>
    <div>
        <div class="rate"></div>
        <h3>The Rideshare Company</h3>
        <p><img src="img/RideShareLogo.png" /></p>
        <p class="plugin-desc">
            The Rideshare Company is a 501(c) non-profit offering ridesharing & commuter programs that make getting to work easier and more cost-efficient. </p>
        <p><a href="#" class="btn btn-blue">Read more</a></p>
    </div>
    <div>
        <div class="rate"></div>
        <h3>FLICKR</h3>
        <p><img src="img/fkickr-logo-ft.jpg" /></p>
        <p class="plugin-desc">
            OkCupid is the only dating app that knows you're more substance than just a selfie—and it's free! Download it today to make meaningful connections with real ... </p>
        <p><a href="#" class="btn btn-blue">Read more</a></p>
    </div>
</div>
`;
    }
}
customElements.define('add-extension', AddExtension);