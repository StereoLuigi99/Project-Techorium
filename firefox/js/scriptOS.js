// Yardımları için Nizel G'ye ve Vavien.'e teşekkürlerimi sunarım.

var baseElmN = document.createElement('img');
baseElmN.width = 34;
baseElmN.height = 34;

var baseElmS = document.createElement('img');
baseElmS.width = 18;
baseElmS.height = 18; 

document.addEventListener("DOMContentLoaded", function(event) {
    {
        if ((window.location.href == "https://techolay.net/sosyal/") || (window.location.href == "https://techolay.net/sosyal/kategori/isletim-sistemleri.51/"))
        {
            // Ana Sayfa (WinNormal + MacSmall + LinuxSmall)

            // Windows 11
            const Win11P = document.getElementsByClassName('node--id52')[0];
            const Win11P2 = Win11P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldWin11 = Win11P2.getElementsByClassName('fa-microsoft')[0];

            const newWin11 = baseElmN.cloneNode(true);
            newWin11.src = browser.runtime.getURL('icons/windows/win11/full.png');
            Win11P2.insertBefore(newWin11, oldWin11);

            // Windows 10
            const Win10P = document.getElementsByClassName('node--id53')[0];
            const Win10P2 = Win10P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldWin10 = Win10P2.getElementsByClassName('fa fab fa-windows')[0];

            const newWin10 = baseElmN.cloneNode(true);
            newWin10.src = browser.runtime.getURL('icons/windows/win10/full.png');
            Win10P2.insertBefore(newWin10, oldWin10);

            // Windows 8/8.1
            const Win8P = document.getElementsByClassName('node--id54')[0];
            const Win8P2 = Win8P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldWin8 = Win8P2.getElementsByClassName('fa fas fa-folder-open')[0];

            const newWin8 = baseElmN.cloneNode(true);
            newWin8.src = browser.runtime.getURL('icons/windows/win8/full.png');
            Win8P2.insertBefore(newWin8, oldWin8);

            // Windows 7
            const Win7P = document.getElementsByClassName('node--id55')[0];
            const Win7P2 = Win7P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldWin7 = Win7P2.getElementsByClassName('fa fas fa-folder')[0];

            const newWin7 = baseElmN.cloneNode(true);
            newWin7.src = browser.runtime.getURL('icons/windows/win7/full.png');
            Win7P2.insertBefore(newWin7, oldWin7);

            // Windows XP (Other)
            const WinXP_P = document.getElementsByClassName('node--id56')[0];
            const WinXP_P2 = WinXP_P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldWinXP = WinXP_P2.getElementsByClassName('fa fas fa-folder-minus')[0];

            const newWinXP = baseElmN.cloneNode(true);
            newWinXP.src = browser.runtime.getURL('icons/windows/win-other/full.png');
            WinXP_P2.insertBefore(newWinXP, oldWinXP);

            // macOS 14 Sonoma (Small)
            const SonomaPS = document.getElementsByClassName('node--id58')[0];
            const SonomaP2S = SonomaPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldSonomaS = SonomaP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newSonomaS = baseElmS.cloneNode(true);
            newSonomaS.src = browser.runtime.getURL('icons/macos/sonoma/full.png');
            SonomaP2S.insertBefore(newSonomaS, oldSonomaS);

            // macOS 13 Ventura (Small)
            const VenturaPS = document.getElementsByClassName('node--id60')[0];
            const VenturaP2S = VenturaPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldVenturaS = VenturaP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newVenturaS = baseElmS.cloneNode(true);
            newVenturaS.src = browser.runtime.getURL('icons/macos/ventura/full.png');
            VenturaP2S.insertBefore(newVenturaS, oldVenturaS);

            // Hackintosh - OpenCore (Small)
            const OpenCorePS = document.getElementsByClassName('node--id59')[0];
            const OpenCoreP2S = OpenCorePS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldOpenCoreS = OpenCoreP2S.getElementsByClassName('fa fas fa-spinner')[0];

            const newOpenCoreS = baseElmS.cloneNode(true);
            newOpenCoreS.src = browser.runtime.getURL('icons/macos/opencore/full.png');
            OpenCoreP2S.insertBefore(newOpenCoreS, oldOpenCoreS);

            // macOS Category
            const MacOSCatPS = document.getElementsByClassName('node--id57')[0];
            const MacOSCatP2S = MacOSCatPS.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldMacOSCatS = MacOSCatP2S.getElementsByClassName('fa fab fa-apple')[0];

            const newMacOSCatS = baseElmN.cloneNode(true);
            newMacOSCatS.src = browser.runtime.getURL('icons/macos/macos-cat/full.png');
            MacOSCatP2S.insertBefore(newMacOSCatS, oldMacOSCatS);

            // GNU/Linux Category
            const LinuxCatPS = document.getElementsByClassName('node--id61')[0];
            const LinuxCatP2S = LinuxCatPS.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldLinuxCatS = LinuxCatP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newLinuxCatS = baseElmN.cloneNode(true);
            newLinuxCatS.src = browser.runtime.getURL('icons/linux/linux-cat/full.png');
            LinuxCatP2S.insertBefore(newLinuxCatS, oldLinuxCatS);

            // Debian (Small)
            const DebianPS = document.getElementsByClassName('node--id191')[0];
            const DebianP2S = DebianPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldDebianS = DebianP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newDebianS = baseElmS.cloneNode(true);
            newDebianS.src = browser.runtime.getURL('icons/linux/debian/full.png');
            DebianP2S.insertBefore(newDebianS, oldDebianS);

            // Pardus (Small)
            const PardusPS = document.getElementsByClassName('node--id192')[0];
            const PardusP2S = PardusPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldPardusS = PardusP2S.getElementsByClassName('fa fas fa-paw')[0];

            const newPardusS = baseElmS.cloneNode(true);
            newPardusS.src = browser.runtime.getURL('icons/linux/pardus/full.png');
            PardusP2S.insertBefore(newPardusS, oldPardusS);

            // Kali Linux (Small)
            const KaliPS = document.getElementsByClassName('node--id193')[0];
            const KaliP2S = KaliPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldKaliS = KaliP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newKaliS = baseElmS.cloneNode(true);
            newKaliS.src = browser.runtime.getURL('icons/linux/kali-linux/full.png');
            KaliP2S.insertBefore(newKaliS, oldKaliS);

            // Ubuntu (Small)
            const UbuntuPS = document.getElementsByClassName('node--id194')[0];
            const UbuntuP2S = UbuntuPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldUbuntuS = UbuntuP2S.getElementsByClassName('fa fab fa-ubuntu')[0];

            const newUbuntuS = baseElmS.cloneNode(true);
            newUbuntuS.src = browser.runtime.getURL('icons/linux/ubuntu/full.png');
            UbuntuP2S.insertBefore(newUbuntuS, oldUbuntuS);

            // Linux Mint (Small)
            const LinuxMintPS = document.getElementsByClassName('node--id195')[0];
            const LinuxMintP2S = LinuxMintPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldLinuxMintS = LinuxMintP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newLinuxMintS = baseElmS.cloneNode(true);
            newLinuxMintS.src = browser.runtime.getURL('icons/linux/linux-mint/full.png');
            LinuxMintP2S.insertBefore(newLinuxMintS, oldLinuxMintS);

            // Pop!_OS (Small)
            const PopOS_PS = document.getElementsByClassName('node--id196')[0];
            const PopOS_P2S = PopOS_PS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldPopOS_S = PopOS_P2S.getElementsByClassName('fa fas fa-parking')[0];

            const newPopOS_S = baseElmS.cloneNode(true);
            newPopOS_S.src = browser.runtime.getURL('icons/linux/pop-os/full.png');
            PopOS_P2S.insertBefore(newPopOS_S, oldPopOS_S);

            // Elementary OS (Small)
            const ElementaryOS_PS = document.getElementsByClassName('node--id197')[0];
            const ElementaryOS_P2S = ElementaryOS_PS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldElementaryOS_S = ElementaryOS_P2S.getElementsByClassName('fa fab fa-linux')[0];

            const newElementaryOS_S = baseElmS.cloneNode(true);
            newElementaryOS_S.src = browser.runtime.getURL('icons/linux/elementary-os/full.png');
            ElementaryOS_P2S.insertBefore(newElementaryOS_S, oldElementaryOS_S);

            // RedHat, CentOS and AlmaLinux (Small)
            const RedHatPS = document.getElementsByClassName('node--id198')[0];
            const RedHatP2S = RedHatPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldRedHatS = RedHatP2S.getElementsByClassName('fa fab fa-redhat')[0];

            const newRedHatS = baseElmS.cloneNode(true);
            newRedHatS.src = browser.runtime.getURL('icons/linux/redhat/full.png');
            RedHatP2S.insertBefore(newRedHatS, oldRedHatS);

            // Fedora (Small)
            const FedoraPS = document.getElementsByClassName('node--id199')[0];
            const FedoraP2S = FedoraPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldFedoraS = FedoraP2S.getElementsByClassName('fa fab fa-fedora')[0];

            const newFedoraS = baseElmS.cloneNode(true);
            newFedoraS.src = browser.runtime.getURL('icons/linux/fedora/full.png');
            FedoraP2S.insertBefore(newFedoraS, oldFedoraS)

            // Arch Linux (Small)
            const ArchLinuxPS = document.getElementsByClassName('node--id200')[0];
            const ArchLinuxP2S = ArchLinuxPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldArchLinuxS = ArchLinuxP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newArchLinuxS = baseElmS.cloneNode(true);
            newArchLinuxS.src = browser.runtime.getURL('icons/linux/arch/full.png');
            ArchLinuxP2S.insertBefore(newArchLinuxS, oldArchLinuxS);

            // Manjaro Linux (Small)
            const ManjaroLinuxPS = document.getElementsByClassName('node--id201')[0];
            const ManjaroLinuxP2S = ManjaroLinuxPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldManjaroLinuxS = ManjaroLinuxP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newManjaroLinuxS = baseElmS.cloneNode(true);
            newManjaroLinuxS.src = browser.runtime.getURL('icons/linux/manjaro/full.png');
            ManjaroLinuxP2S.insertBefore(newManjaroLinuxS, oldManjaroLinuxS);

            // Gentoo (Small)
            const GentooPS = document.getElementsByClassName('node--id202')[0];
            const GentooP2S = GentooPS.getElementsByClassName('xfa-nit-node-icon-small')[0];
            const oldGentooS = GentooP2S.getElementsByClassName('fa fab fa-linux')[0];

            const newGentooS = baseElmS.cloneNode(true);
            newGentooS.src = browser.runtime.getURL('icons/linux/gentoo/full.png');
            GentooP2S.insertBefore(newGentooS, oldGentooS);

            // Other OS (AmogOS)
            const AmogOS_P = document.getElementsByClassName('node--id62')[0];
            const AmogOS_P2 = AmogOS_P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldAmogOS_ = AmogOS_P2.getElementsByClassName('fa fas fa-folder-plus')[0];

            const newAmogOS_ = baseElmN.cloneNode(true);
            newAmogOS_.src = browser.runtime.getURL("icons/amogos-full.png");
            AmogOS_P2.insertBefore(newAmogOS_, oldAmogOS_);
        }

        else if (window.location.href.indexOf("https://techolay.net/sosyal/bolum/macos.57/") > -1)
        {
            // macOS 14 Sonoma
            const SonomaP = document.getElementsByClassName('node--id58')[0];
            const SonomaP2 = SonomaP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldSonoma = SonomaP2.getElementsByClassName('fa fab fa-apple')[0];

            const newSonoma = baseElmN.cloneNode(true);
            newSonoma.src = browser.runtime.getURL('icons/macos/sonoma/full.png');
            SonomaP2.insertBefore(newSonoma, oldSonoma);

            // macOS 13 Ventura
            const VenturaP = document.getElementsByClassName('node--id60')[0];
            const VenturaP2 = VenturaP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldVentura = VenturaP2.getElementsByClassName('fa fab fa-apple')[0];

            const newVentura = baseElmN.cloneNode(true);
            newVentura.src = browser.runtime.getURL('icons/macos/ventura/full.png');
            VenturaP2.insertBefore(newVentura, oldVentura);

            // Hackintosh - OpenCore
            const OpenCoreP = document.getElementsByClassName('node--id59')[0];
            const OpenCoreP2 = OpenCoreP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldOpenCore = OpenCoreP2.getElementsByClassName('fa fas fa-spinner')[0];

            const newOpenCore = baseElmN.cloneNode(true);
            newOpenCore.src = browser.runtime.getURL('icons/macos/opencore/full.png');
            OpenCoreP2.insertBefore(newOpenCore, oldOpenCore);
        }

        else if (window.location.href.indexOf("https://techolay.net/sosyal/bolum/gnu-linux.61/") > -1)
        {
            // Debian
            const DebianP = document.getElementsByClassName('node--id191')[0];
            const DebianP2 = DebianP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldDebian = DebianP2.getElementsByClassName('fa fab fa-linux')[0];

            const newDebian = baseElmN.cloneNode(true);
            newDebian.src = browser.runtime.getURL("icons/linux/debian/full.png");
            DebianP2.insertBefore(newDebian, oldDebian);

            // Pardus
            const PardusP = document.getElementsByClassName('node--id192')[0];
            const PardusP2 = PardusP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldPardus = PardusP2.getElementsByClassName('fa fas fa-paw')[0];

            const newPardus = baseElmN.cloneNode(true);
            newPardus.src = browser.runtime.getURL("icons/linux/pardus/full.png");
            PardusP2.insertBefore(newPardus, oldPardus);

            // Kali Linux
            const KaliLinuxP = document.getElementsByClassName('node--id193')[0];
            const KaliLinuxP2 = KaliLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldKaliLinux = KaliLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newKaliLinux = baseElmN.cloneNode(true);
            newKaliLinux.src = browser.runtime.getURL("icons/linux/kali-linux/full.png");
            KaliLinuxP2.insertBefore(newKaliLinux, oldKaliLinux);

            // Ubuntu
            const UbuntuP = document.getElementsByClassName('node--id194')[0];
            const UbuntuP2 = UbuntuP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldUbuntu = UbuntuP2.getElementsByClassName('fa fab fa-ubuntu')[0];

            const newUbuntu = baseElmN.cloneNode(true);
            newUbuntu.src = browser.runtime.getURL("icons/linux/ubuntu/full.png");
            UbuntuP2.insertBefore(newUbuntu, oldUbuntu);

            // Linux Mint
            const LinuxMintP = document.getElementsByClassName('node--id195')[0];
            const LinuxMintP2 = LinuxMintP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldLinuxMint = LinuxMintP2.getElementsByClassName('fa fab fa-linux')[0];

            const newLinuxMint = baseElmN.cloneNode(true);
            newLinuxMint.src = browser.runtime.getURL("icons/linux/linux-mint/full.png");
            LinuxMintP2.insertBefore(newLinuxMint, oldLinuxMint);

            // Pop!_OS
            const PopOS_P = document.getElementsByClassName('node--id196')[0];
            const PopOS_P2 = PopOS_P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldPopOS_ = PopOS_P2.getElementsByClassName('fa fas fa-parking')[0];

            const newPopOS_ = baseElmN.cloneNode(true);
            newPopOS_.src = browser.runtime.getURL("icons/linux/pop-os/full.png");
            PopOS_P2.insertBefore(newPopOS_, oldPopOS_);

            // Elementary OS
            const ElementaryOS_P = document.getElementsByClassName('node--id197')[0];
            const ElementaryOS_P2 = ElementaryOS_P.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldElementaryOS_ = ElementaryOS_P2.getElementsByClassName('fa fab fa-linux')[0];

            const newElementaryOS_ = baseElmN.cloneNode(true);
            newElementaryOS_.src = browser.runtime.getURL("icons/linux/elementary-os/full.png");
            ElementaryOS_P2.insertBefore(newElementaryOS_, oldElementaryOS_);

            // RedHat, CentOS and AlmaLinux
            const RedHatP = document.getElementsByClassName('node--id198')[0];
            const RedHatP2 = RedHatP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldRedHat = RedHatP2.getElementsByClassName('fa fab fa-redhat')[0];

            const newRedHat = baseElmN.cloneNode(true);
            newRedHat.src = browser.runtime.getURL("icons/linux/redhat/full.png");
            RedHatP2.insertBefore(newRedHat, oldRedHat);

            // Fedora
            const FedoraP = document.getElementsByClassName('node--id199')[0];
            const FedoraP2 = FedoraP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldFedora = FedoraP2.getElementsByClassName('fa fab fa-fedora')[0];

            const newFedora = baseElmN.cloneNode(true);
            newFedora.src = browser.runtime.getURL("icons/linux/fedora/full.png");
            FedoraP2.insertBefore(newFedora, oldFedora);

            // Arch Linux
            const ArchLinuxP = document.getElementsByClassName('node--id200')[0];
            const ArchLinuxP2 = ArchLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldArchLinux = ArchLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newArchLinux = baseElmN.cloneNode(true);
            newArchLinux.src = browser.runtime.getURL("icons/linux/arch/full.png");
            ArchLinuxP2.insertBefore(newArchLinux, oldArchLinux);

            // Manjaro Linux
            const ManjaroLinuxP = document.getElementsByClassName('node--id201')[0];
            const ManjaroLinuxP2 = ManjaroLinuxP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldManjaroLinux = ManjaroLinuxP2.getElementsByClassName('fa fab fa-linux')[0];

            const newManjaroLinux = baseElmN.cloneNode(true);
            newManjaroLinux.src = browser.runtime.getURL("icons/linux/manjaro/full.png");
            ManjaroLinuxP2.insertBefore(newManjaroLinux, oldManjaroLinux);

            // Gentoo
            const GentooP = document.getElementsByClassName('node--id202')[0];
            const GentooP2 = GentooP.getElementsByClassName('xfa-nit-node-icon')[0];
            const oldGentoo = GentooP2.getElementsByClassName('fa fab fa-linux')[0];

            const newGentoo = baseElmN.cloneNode(true);
            newGentoo.src = browser.runtime.getURL("icons/linux/gentoo/full.png");
            GentooP2.insertBefore(newGentoo, oldGentoo);
        }

    }});
