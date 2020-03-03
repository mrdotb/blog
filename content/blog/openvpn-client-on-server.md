---	
title: Openvpn Client On Server
date: "2020-03-01T12:37:19.357Z"	
description: "Connecting VPN as client from a server without loosing the ssh / vnc connexion"
---
### Connect your VPN as client from your server without loosing the ssh / vnc connexion.

I got this problems some years ago and I was unable to solve it by myself. I found some answers on stack overflow and it kind of a work but I was unable to understand why. I use this as an occasion to learn more about linux and network. I will share with you the solution I found the most effective and simple.

A little diagram about what we want to achieve with my current setup to make it easy for you to follow.
```
     ***********             +------------------------+
  ***           ***          |          Server        |
**    INTERNET     **--------|public ip 35.201.136.114|
  ***           ***          |   eth0 - 10.140.0.11   |
     ***********             +------------+-----------+
          |                               |
          |                   +-----------+------------+
+----------------------+      |          VPN           |
|        Box           |      |public IP 113.29.230.196|
|public ip 49.237.13.31|      +-----------+------------+
| local ip 192.168.43.1|                  |
+----------------------+                  |
          |                          ***********
+---------+-----------+           ***           ***
|      Computer       |         **    INTERNET     **
|eth0 - 192.168.43.180|           ***           ***
+---------------------+              ***********
```

Let's open a shell.

```shell
# We need to get ou public IP first
curl ipinfo.io/ip
49.237.13.31
# Got it let's connect to our server
ssh mrdotb@35.201.136.114
# let's put our IP inside a ENV variable
export our_ip="49.237.13.31"
# We are going to copy of the main routing table in the table 22
ip route | awk '{print "sudo ip route add table 22 " $0}' | bash
# Adding a route require sudo or to be the root user
sudo ip rule add from $our_ip table 22
sudo ip rule add to $our_ip table 22
# We created rules to route all the packet from /to
# our_ip to look in the table 22 before the table main
# Using the handy cmd timeout we can test 
# if we are able to connect to our vpn without getting locked out
timeout 20 /usr/sbin/openvpn yourvpnconfig.ovpn
# The vpn will mount his own routes in the main routing table

# How to reset all the previous modification ?
ip rule delete from $our_ip table 22
ip rule delete to $our_ip table 22
ip route flush table 22
```
