#
# ~/.bashrc
#

# Mounting shortcuts
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias dt="cd ~/Desktop"
alias pr="cd ~/Projects"
alias dl="cd ~/Downloads"

# Confirm before overwriting something
alias cp="cp -iv"
alias mv="mv -iv"
alias rm="rm -iv"

# Applications
alias c="code ."
alias r="ranger"
alias t="thunar"
alias lsa="lsd -hal --group-directories-first" #ls command with colors and nerdfont icons
alias ls="lsd --group-directories-first" #ls command with colors and nerdfont icons
alias xampp='sudo /opt/lampp/xampp'
alias xamppui='sudo /opt/lampp/manager-linux-x64.run'
alias xamppstart='sudo /opt/lampp/xampp startapache && sudo /opt/lampp/xampp startmysql'
alias xamppstop='sudo /opt/lampp/xampp stopapache && sudo /opt/lampp/xampp stopmysql'
alias taskui="taskwarrior-tui" #task and taskwarior-tui for todo-list vriations
alias vpn="sudo openvpn ~/Public/proxies/ovpn_tcp/fi167.nordvpn.com.tcp.ovpn"


# Flashes...
alias sysfetch="~/bin/sysfetch" # System Fetch
alias colorscript="~/bin/colorscript" #Run a test color script

#epy epub reader
alias rss="canto-curses"
# Get week number
alias week='date +%V'
# Get a random number in range:
#alias random='echo $(( $RANDOM % 20 + 1 ))'


#alias mirrors="sudo reflector --verbose --latest 5 --country 'United State' --age 6 --sort rate --save /etc/pacman.d/mirrorlist"
alias grub-update="sudo grub-mkconfig -o /boot/grub/grub.cfg"
alias manintnance="yay -Sc && sudo pacman -Scc"
alias purge="sudo pacman -Rns $(pacman -Qtdq) ; sudo fstrim -av"
alias update="yay -Syu"
#alias vm-on="sudo systemctl start libvirtd.service"
#alias vm-off="sudo systemctl stop libvirtd.service"
#alias start-cine="sudo systemctl start minidlna.service;sudo minidlnad -R;sudo systemctl restart minidlna.service"
#alias stop-cine="sudo systemctl stop minidlna.service"
#alias music="ncmpc"
alias v="vim"


# Colours have names too. Stolen from Arch wiki
txtblk='\[\e[0;30m\]' # Black - Regular
txtred='\[\e[0;31m\]' # Red
txtgrn='\[\e[0;32m\]' # Green
txtylw='\[\e[0;33m\]' # Yellow
txtblu='\[\e[0;34m\]' # Blue
txtpur='\[\e[0;35m\]' # Purple
txtcyn='\[\e[0;36m\]' # Cyan
txtwht='\[\e[0;37m\]' # White
bldblk='\[\e[1;30m\]' # Black - Bold
bldred='\[\e[1;31m\]' # Red
bldgrn='\[\e[1;32m\]' # Green
bldylw='\[\e[1;33m\]' # Yellow
bldblu='\[\e[1;34m\]' # Blue
bldpur='\[\e[1;35m\]' # Purple
bldcyn='\[\e[1;36m\]' # Cyan
bldwht='\[\e[1;37m\]' # White
unkblk='\[\e[4;30m\]' # Black - Underline
undred='\[\e[4;31m\]' # Red
undgrn='\[\e[4;32m\]' # Green
undylw='\[\e[4;33m\]' # Yellow
undblu='\[\e[4;34m\]' # Blue
undpur='\[\e[4;35m\]' # Purple
undcyn='\[\e[4;36m\]' # Cyan
undwht='\[\e[4;37m\]' # White
bakblk='\[\e[40m\]'   # Black - Background
bakred='\[\e[41m\]'   # Red
badgrn='\[\e[42m\]'   # Green
bakylw='\[\e[43m\]'   # Yellow
bakblu='\[\e[44m\]'   # Blue
bakpur='\[\e[45m\]'   # Purple
bakcyn='\[\e[46m\]'   # Cyan
bakwht='\[\e[47m\]'   # White
txtrst='\[\e[0m\]'    # Text Reset

term=$(ps -o sid= -p "$$" | xargs ps -o ppid= -p | xargs ps -o comm= -p)
# Red name for root
if [ "${UID}" -eq "0" ]; then
  nameColor="${bldred}"
fi

# Patent Pending Prompt
#export PS1="${nameC}\u${atC}@${hostC}\h:${pathC}   \w    ${normalC} "
export PS1="${bldylw}┌${txtylw} at ${bldylw}\A ${txtylw}on ${bldylw}${SHELL##*/} ${txtylw}in ${bldred} ${term}  ${nameColor}\u  ${txtblu}\w\n${bldylw}└  \l ${txtgrn}  ${txtrst}"

