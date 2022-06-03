export default function Modal(){
    return(<>
    
    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                         <h4 class="modals-title  mb-0" id="exampleModalLabel">Connect Wallet</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-20">Please select a wallet to connect to this marketplace</p>
                        <div class="connect-section">
                            <ul class="heading-list">
                                <li><a href="#"><span><img src="/images/icons/meta-mask.png" alt="Meta-mask-Image"/></span>MetaMask</a></li>
                                <li><a href="#"><span><img src="/images/icons/coinbase.png" alt="Coinbase-Image" /></span>Coinbase</a></li>
                                <li><a href="#"><span><img src="/images/icons/trust.png" alt="Trust-Image" /></span>Trust Wallet</a></li>
                                <li><a href="#"><span><img src="/images/icons/wallet.png" alt="Wallet-Image" /></span>WalletConnect</a></li>
                            </ul>
                        </div>
                        <p>By connecting your wallet, you agree to our <a href="#"><span class="modal-title">Terms of Service </span>
                            </a>and our <a href="#"><span class="modal-title"> Privacy Policy</span></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
    </>)
}